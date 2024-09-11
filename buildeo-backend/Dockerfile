# Build stage
FROM golang:1.23-alpine3.19 AS builder

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod tidy

COPY . .

RUN go build -o main .

# Final stage
FROM alpine:3.19

WORKDIR /app

COPY --from=builder /app/main /app/main
COPY app.env /app/app.env

EXPOSE 8080

CMD ["/app/main"]
