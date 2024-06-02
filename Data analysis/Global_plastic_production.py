import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

global_plastic_prod_df = pd.read_csv("data/global-plastics-production.csv")
print(global_plastic_prod_df)

x = global_plastic_prod_df["Year"]
y= global_plastic_prod_df["Annual plastic production between 1950 and 2019"]/1000000 #makes it easier to plot
sns.set_theme(style="darkgrid")
new_labels = [
    f'{(e / 1000000):,.1f} million tonne'
    for e in global_plastic_prod_df["Annual plastic production between 1950 and 2019"]
] #custome labels
sns.lineplot(x = x,y = y, markers=True, marker = ".").set(
    title = "Annual plastic production between 1950 and 2019",
    xlabel = "Year", ylabel = "Production in million tonne")
plt.savefig(fname= "figures/global_plastic_production.svg", format = "svg")

#plt.show()