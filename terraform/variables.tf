variable "environment" {
  type        = string
  description = ""
  default     = "prod"
}

variable "aws_region" {
  type        = string
  description = ""
}

variable "aws_profile" {
  type        = string
  description = ""
}

variable "service_name" {
  type        = string
  description = ""
  default     = "RepoProvas"
}

variable "service_domain" {
  type        = string
  description = ""
  default     = "api-repoprovas"
}
