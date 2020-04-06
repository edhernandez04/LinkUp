class User < ApplicationRecord
        has_secure_password
        validates :userName, uniqueness: { case_sensitive: false }
end
