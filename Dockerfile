FROM nginx

WORKDIR /michalk2k04/projects/web/wiai-flex

MAINTAINER "Michał Kordyś"

COPY ./ /usr/share/nginx/html/