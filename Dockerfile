FROM node:20-alpine

# User setup and copy application files
ENV USER=banki
ENV UID=1001

RUN adduser \
  --disabled-password \
  --gecos "" \
  --home "$(pwd)" \
  --uid "$UID" \
  "$USER"

# Copy app files
WORKDIR /home/banki
COPY --chown=banki:banki . .
RUN chmod +x docker/*.sh

# Install project dependencies
RUN npm install

# ENTRYPOINT ["docker/entrypoint.sh"]
CMD ["docker/start.sh"]

