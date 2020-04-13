class AvatarsController < ApplicationController
    def index
        avatars = Avatar.all
        render json: avatars
    end

    def show
        avatar = Avatar.all.find do |avatar|
        avatar.id === params[:id]
        end
    end

    def update
        avatar = Avatar.find(params[:id])
        avatar.update(avatar_params)
        render json: avatar
    end

    def destroy
        avatar = Avatar.find(params[:id])
        avatar.destroy
    end

    private

    def avatar_params
        params.require(:avatar).permit(:name, :image)
    end
end
