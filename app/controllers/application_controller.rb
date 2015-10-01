class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :signed_in?

  def log_in!(user)
    user.reset_token!
    @current_user = user
    session[:session_token] = user.session_token
  end

  #Auth method, checks if a user is logged in
  def current_user
    return nil if self.session[:session_token].nil?
    @current_user ||= User.find_by(session_token: self.session[:session_token])
  end

  #Utility method, Checks for current user
  def signed_in?
    !!current_user
  end

  #Resets browser session token and attempts to resetcurrent users' session token
  def log_out!
    current_user.try(:reset_token!)
    self.session[:session_token] = nil
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

  def require_signed_in!
    redirect_to new_session_url unless signed_in?
  end
end
