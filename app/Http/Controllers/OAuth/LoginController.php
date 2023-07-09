<?php

namespace App\Http\Controllers\OAuth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use Laravel\Socialite\Facades\Socialite;

class LoginController extends Controller
{
    public function redirectToProvider()
    {
        // return Socialite::driver('google')->stateless()->redirect();
        $redirect_url = Socialite::driver('google')->redirect()->getTargetUrl();
        return response()->json($redirect_url);
    }

    /**
     * Obtain the user information from GitHub.
     *
     * @return \Illuminate\Http\Response
     */
    public function handleProviderCallback(Request $request)
    {
        $user = Socialite::driver("google")->user();

        $login_user = User::where("email", $user->email)->first();
        if (empty($login_user)) {
            $login_user = User::create([
                "email" => $user->email,
                "name" => $user->name,
                "avatar" => $user->avatar,
            ]);
        }

        $token = $login_user->createToken("Token Name")->plainTextToken;
        return response()->json($token);
    }
}
