# Stage 1: Build the Go app
FROM golang:1.20-alpine as builder
WORKDIR /app

# Copy go.mod and go.sum
COPY ./buildeo-backend/go.mod ./buildeo-backend/go.sum ./

# Download dependencies
RUN go mod tidy

# Copy the rest of the application source code
COPY ./buildeo-backend/ .

# Build the Go app
RUN go build -o main .

# Stage 2: Run the application
FROM alpine:latest
WORKDIR /root/

# Copy the built application and config file
COPY --from=builder /app/main .
COPY --from=builder /app/app.env .

EXPOSE 8080

# Run the application
CMD ["./main"]
