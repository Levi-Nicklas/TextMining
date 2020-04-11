# TF-IDF 
# Author: Levi C. Nicklas
# Date: 4/10/20
#
#

# Libraries ----------------------
library(tidyverse)
library(tidytext)

# Read in Data -------------------
data_path <- "../Raw_Data/redditData/"
file_list <- list.files(path = data_path)

for(i in 1:length(file_list)){
  tmp_file <- readRDS(paste0(data_path,file_list[i]))
  tmp_file_name <- substr(file_list[i], 1, (nchar(file_list[i])-4))
  
  assign(tmp_file_name, tmp_file)
  rm(tmp_file,tmp_file_name)
}

# Single DF EDA ------------------
df_eda1 <- `bloodpressure-keto` %>% 
  select(id, link, title, comment) %>% 
  tidytext::unnest_tokens(word, comment) %>% 
  anti_join(stop_words)

df_eda1 %>% 
  count(word, sort = TRUE) %>%
  filter(n > 250) %>%
  mutate(word = reorder(word, n)) %>%
  ggplot(aes(word, n)) +
  geom_col() +
  xlab(NULL) +
  coord_flip()





