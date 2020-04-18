### Get Google News Data
### Author : Levi C. Nicklas
### Date: 4/16/2020

### Libraries
library(twitteR)
library(tidyverse)

source("news.R")


keywords <- c("opec", "OPEC","oil", "Coronavirus", "coronavirus", "COVID")
# May want to leave term empty to just search top headlines.
# OR search other news, like USA 
