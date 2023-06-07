<?php

namespace App\Http\Middleware;

use App\Http\Resources\UserSharedResource;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {
        $flash = $this->getFlashMessage();
        return array_merge(parent::share($request), [
            'auth.user' => $request->user()
                ? new UserSharedResource($request->user())
                : null,
            /*'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },*/
            'flash' => [
                'title' => $flash->title??'',
                'message' =>$flash->messsage??'',
            ]
        ]);
    }


    protected function getFlashMessage(): \stdClass
    {
        $flash = new \stdClass;
        if(session('success')){
            $flash->title = 'Success';
            $flash->messsage = session('success');
        }else if(session('error')){
            $flash->title = 'Error';
            $flash->messsage = session('error');
        }
        else if(session('warning')){
            $flash->title = 'Warning';
            $flash->messsage = session('warning');
        }
        else if(session('info')){
            $flash->title = 'Info';
            $flash->messsage = session('info');
        }
        return $flash;
    }
}
