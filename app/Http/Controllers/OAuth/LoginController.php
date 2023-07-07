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
        // return response()->json("aaa");
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
        // return response()->json($request);
        $user = Socialite::driver("google")->user();
        $login_user = User::where("email", $user->email)->first();
        if ($login_user) {
            // return response()->json([
            //     "data" => $login_user,
            //     "message" => "exist user"
            // ]);
        } else {
            // return response()->json($column);
            $login_user = User::create([
                "email" => $user->email,
                "name" => $user->name,
                "avatar" => $user->avatar,
            ]);
        }

        // return response()->json($login_user);
        // Auth::login($login_user);
        $token = $login_user->createToken("Token Name")->plainTextToken;
        return response()->json($token);
        // Auth::login($login_user, $remember = true);
        // $login_user = User::firstOrCreate([
        //     'email' => $user->email,
        // ], [
        //     "name" => $user->name,
        //     'image' => $user->avatar,
        // ]);

        // return response()->json(Auth::user());
    }
}
