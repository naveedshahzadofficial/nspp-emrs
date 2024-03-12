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

    private function mapInstituteIds($institute)
    {
        return $institute->short_name == 'NMC Lahore'?7:$institute->id;
    }

    public function getParticipants($institute)
    {
        $institute_id = $this->mapInstituteIds($institute);
        $client = new Client([
             'verify' => false,
            ]);
        $request = new Request('POST', $this->api_base_url.'/get_institute_participant_list',
            [
                'Content-Type' => 'application/json'
            ],
            json_encode(['auth_key'=>$this->auth_key, 'institute_id'=> $institute_id]));

        $response = $client->sendAsync($request)->wait();
        $response_json =  $response->getBody()->getContents();
        $obj = json_decode(trim($response_json));
        return $obj->data??[];
    }
}
