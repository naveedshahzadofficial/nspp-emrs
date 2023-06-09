<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;

class AuthController extends Controller
{
    function showLoginForm(): Response
    {
        return Inertia::render('Auth/Login');
    }

    function submitLoginForm(LoginRequest $request): RedirectResponse
    {
        //$request->authenticate();
        if(Auth::attempt($request->validated())){
            $request->session()->regenerate();
            return redirect()->intended('dashboard');
        }
        return back()->withErrors([
            'username' => 'The provided credentials do not match our records'
        ]);
    }

    function logout(Request $request): RedirectResponse
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect()->route('login');
    }

    function showForgotForm(): Response
    {
        return Inertia::render('Auth/ForgotPassword');
    }

    function submitForgotForm(Request $request){
        $request->validate([
            'email' => 'required|email|max:100'
        ]);

        $user = User::where('email', $request->email)->first();
        if(!$user)
            return back()->withErrors(['email' => "We can't find a user with that email address."]);


    }

    function showResetForm(): Response
    {
        return Inertia::render('Auth/ResetPassword');
    }

    function submitResetForm(){

    }
}
