<?php

namespace App\Services;

use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Request;

class EmployeeService
{
    private $api_base_url;
    private $client_service;
    private $auth_key;

    public function __construct()
    {
        $this->api_base_url = config('hrmis.api_base_url');
        $this->client_service = config('hrmis.client_service');
        $this->auth_key = config('hrmis.auth_key');
    }

    public function getOfficers($head, $head_of_wing=null)
    {
        $client = new Client([
             'verify' => false,
            ]);
        $request = new Request('POST', $this->api_base_url.'/get_officer_data',
            [
                'Content-Type' => 'application/json',
                'Client-service' => $this->client_service,
                'Auth-key' => $this->auth_key,
            ],json_encode(['head'=>$head, 'head_of_wing'=> $head_of_wing]));
        $response = $client->sendAsync($request)->wait();
        $response_json =  $response->getBody()->getContents();
        $obj = json_decode(trim($response_json));
        return $obj->data??[];
    }
}
