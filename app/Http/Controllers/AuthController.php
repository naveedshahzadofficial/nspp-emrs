<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
    function showLoginForm(){
        return Inertia::render('Auth/Login');
    }

    function submitLoginForm(LoginRequest $request){
        //$request->authenticate();
        if(Auth::attempt($request->validated())){
            $request->session()->regenerate();
            return redirect()->intended('dashboard');
        }
        return back()->withErrors([
            'username' => 'The provided credentials do not match our records'
        ]);
    }

    function logout(Request $request){
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect()->route('login');
    }

    function showResetForm(){

    }

    function submitResetForm(){

    }
}
