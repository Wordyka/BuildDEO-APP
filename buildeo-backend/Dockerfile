FROM 1.23.1-alpine3.19 as builder
WORKDIR /app

# Copy go.mod and go.sum
COPY go.mod go.sum ./

# Download dependencies
RUN go mod tidy

# Copy the rest of the application source code
COPY . .

# Build the Go app
RUN go build -o main .
