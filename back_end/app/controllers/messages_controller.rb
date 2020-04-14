class MessagesController < ApplicationController

    def index
        messages = Message.all
        render json: messages
    end

    def show
        message = Message.all.find do |message|
        message.id === params[:id]
        end
    end

    def create
        message = Message.new(message_params)
        if message.save
              render json: message
        else
              render json: {errors: message.errors.full_messages}, status: 422
        end
   end

   private

   def message_params
        params.require(:message).permit(:content, :channel_id, :user_id)
   end

end
