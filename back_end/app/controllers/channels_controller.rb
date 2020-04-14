class ChannelsController < ApplicationController

    def index
        channels = Channel.all
        render json: channels
   end

   def create
        channel = Channel.new(channel_params)
        if channel.save
             render json: channel
        else
             render json: {errors: game.errors.full_messages}, status: 422
        end
   end

   def show
        channel = Channel.find(params[:id])
        render json: channel, include: [:messages]
   end

   def destroy
        channel = Channel.find(params[:id])
        channel.destroy
   end

   private

   def channel_params
        params.require(:channel).permit(:name)
   end

end
