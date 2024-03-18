FROM ruby:3.1.2

RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
RUN gem install rails bundler

WORKDIR /app
COPY . /app/

RUN bundle install
EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]
