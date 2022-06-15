install.packages("pwr")
library(pwr)
pwr.chisq.test(w = 0.25, df = 3, sig.level = 0.05, power = 0.8)
citation("pwr")
