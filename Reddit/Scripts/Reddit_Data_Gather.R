# Gather and Format Datasets from reddit.
# Author: Levi C Nicklas
# 
# Notes:  Gather data from reddit, specifically as it relates to 
#         hypertension & diets/lifestyles. 
#         Check in subreddits:
#           r/keto, r/paleo, r/vegan, r/whole30, r/carnivore.
#
#

## Libraries ## 
library(tidyverse)
library(RedditExtractoR)
library(lubridate)
library(beepr)


## Define Search Criteria ##
keywords <- c("blood pressure", "hypertension", "heart", 
              "cardio", "cardiovascular", "EKG", "stress",
              "sodium", "cholesterol", "sleep", "money",
              "cost", "price", "available")

subreddits <- c("keto", "paleo", "vegan", "whole30", "carnivore")

comment_threshold <- 5
page_threshold <- 5
sorting_crit <- "comments"
delay_time <- 2

BuildRedditRData <- function(search_word, which_subreddit){
  # This function needs some error handling.
  
  result <- RedditExtractoR::get_reddit(search_terms = search_word,
                                         subreddit = which_subreddit,
                                         cn_threshold = comment_threshold,
                                         sort_by = sorting_crit,
                                         wait_time = delay_time)
  
  print(result)
  
  data_name <- paste0(gsub(" ", "", search_word, fixed = TRUE),
                      "-",
                      which_subreddit #,
                      #"_",
                      #lubridate::today(tz = "UTC")
                      )
  
  saveRDS(object = result, 
          file = paste0("/Users/levinicklas/Documents/ds_research_SP_2020/Levi_Text_Mining/Raw_Data/",data_name,".RDS"))
  
}


#BuildRedditRData(search_word = keywords[14], which_subreddit = subreddits[5])
# j = 5, i = 4 is not present.


for(i in 1:length(subreddits)){
  for(j in 1:length(keywords)){
    BuildRedditRData(search_word = keywords[j], 
                     which_subreddit = subreddits[i+3])
    beepr::beep(sound = 1)
  }
}

beepr::beep(sound = 4)
