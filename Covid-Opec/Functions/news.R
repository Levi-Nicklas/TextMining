# Function to get news
# From:
# https://www.r-bloggers.com/scraping-google-news-with-rvest/
# AND
# https://stackoverflow.com/questions/60548604/how-to-scrape-google-news-results-into-a-data-frame-with-rvest

require(dplyr)
require(rvest)
require(stringr)

news <- function(term) {
  
  html_dat <- read_html(paste0("https://news.google.com/search?q=",term,"&hl=en-US&gl=US&ceid=US%3Aen"))
  
  dat <- data.frame(Link = html_dat %>%
                      html_nodes('.VDXfz') %>% 
                      html_attr('href')) %>% 
    mutate(Link = gsub("./articles/","https://news.google.com/articles/",Link))
  
  news_dat <- data.frame(
    Title = html_dat %>%
      html_nodes('.DY5T1d') %>%
      html_text(),
    Link = dat$Link,
    Description =  html_dat %>%
      html_nodes('.Rai5ob') %>%
      html_text(),
    Time = html_dat %>% 
      html_nodes("div article div div time") %>% 
      html_text()
  )
  
  return(news_dat)
}





