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
        $this->api_base_url = config('hrmis.api_base_url');
        $this->auth_key = config('hrmis.auth_key');
    }

    public function getParticipants($institute_id)
    {
        $client = new Client();
        $request = new Request('POST', $this->api_base_url.'/get_officer_data',
            [
                'Content-Type' => 'application/json',
                'Auth-key' => $this->auth_key,
            ],json_encode(['institute_id'=> $institute_id]));
        $response = $client->sendAsync($request)->wait();
        $response_json =  $response->getBody()->getContents();
        $obj = json_decode(trim($response_json));
        return $obj->data??[];
    }
}
