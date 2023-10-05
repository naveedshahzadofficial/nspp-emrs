<?php

namespace App\Services;

use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Request;

class ParticipantService
{
    private $api_base_url;
    private $auth_key;

    public function __construct()
    {
        $this->api_base_url = config('nsppeportal.api_base_url');
        $this->auth_key = config('nsppeportal.auth_key');
    }

    public function getParticipants($institute_id)
    {
        $client = new Client();
        $request = new Request('POST', $this->api_base_url.'/get_institute_participant_list',
            [
                'Content-Type' => 'application/json',
            ],[
                'multipart' => [
                    [
                        'name' => 'auth_key',
                        'contents' => $this->auth_key
                    ],
                    [
                        'name' => 'institute_id',
                        'contents' => $institute_id
                    ]
                ]
            ]);
        $response = $client->sendAsync($request)->wait();
        $response_json =  $response->getBody()->getContents();
        $obj = json_decode(trim($response_json));
        return $obj->data??[];
    }
}
