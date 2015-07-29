require 'dotenv'
Dotenv.load

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload, :host => '127.0.0.1'
end

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

set :haml, { ugly: true, format: :html5 }
activate :syntax

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end

activate :deploy do |deploy|
  deploy.method = :sftp
  deploy.host = ENV['DEPLOY_HOST']
  deploy.port = ENV['DEPLOY_PORT']
  deploy.path = ENV['DEPLOY_PATH']
  deploy.user = ENV['DEPLOY_USER']
end
