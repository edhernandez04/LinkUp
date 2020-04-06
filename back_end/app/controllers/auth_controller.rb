class AuthController < ApplicationController

    def login
        user = User.find_by(userName: params[:userName])
            if user && user.authenticate(params[:password])
                token = encode_token(user.id)
                render json: {user: user, token: token}
            else
                render json: {errors: "Incorrect Info"}
            end
    end

    def auto_login
        if session_user
            render json: session_user
        else
            render json: {errors: "No such user"}
        end
    end

  end