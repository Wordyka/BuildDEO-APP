# Use a specific Go version with Alpine Linux as the base image
FROM golang:1.21-alpine3.19 as builder

WORKDIR /app

# Copy go.mod and go.sum to cache dependencies
COPY go.mod go.sum ./

# Download dependencies
RUN go mod tidy

# Copy the rest of the application source code
COPY . .

# Build the Go app
RUN go build -o main .
