import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

plastic_fate_df = pd.read_csv("data/plastic-fate.csv")
sns.set_theme(style="darkgrid")
grouped = plastic_fate_df.groupby("Entity") #group data by country (called entity in this dataset)
world_group = grouped.get_group("World")
world_group[["Recycled", "Incinerated", "Littered and mismanaged","Landfilled"]] = (
        world_group[["Recycled", "Incinerated", "Littered and mismanaged","Landfilled"]]/10000000) #makes nicer plot

ax = world_group.plot(x = "Year", kind = "area", legend = True)
ax.set_xticks(range(2000,2020,2)) #set the ticks for the x axis (otherwise they are not whole years)
#plt.show()
plt.savefig(fname= "figures/plastic_fate.svg", format = "svg")