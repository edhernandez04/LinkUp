class User < ApplicationRecord
        has_secure_password
        validates :userName, uniqueness: { case_sensitive: false }
        has_many :messages
end
