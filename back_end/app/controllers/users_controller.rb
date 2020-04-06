class UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def create
    user = User.new(
      userName: params[:userName],
      password: params[:password]
    )
    if user.save
      token = encode_token(user.id)
      render json: {user: user, token: token}
    else
      render json: {errors: user.errors.full_messages}
    end
  end

  def show
    user = User.all.find do |user|
      user.id === params[:id]
    end
  end

  def update
    user = User.find(params[:id])
    user.update(user_params)

    render json: user
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
  end

  private
  def user_params
    params.require(:user).permit(:fullName, :userName, :password, :avatar_id)
  end

end
