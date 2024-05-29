import pandas as pd
import geopandas as gpd
import matplotlib.pyplot as plt
import seaborn as sns

sns.set_theme(style = "dark")
mismanaged_plastic_df = pd.read_csv("data/mismanaged_plastic_waste_per_capita.csv")
mismanaged_plastic_df.set_index("Entity", inplace = True)

world = gpd.read_file(gpd.datasets.get_path('naturalearth_lowres'))

# fix for bug https://github.com/geopandas/geopandas/issues/1041
world.loc[world['name'] == 'France', 'iso_a3'] = 'FRA'
world.loc[world['name'] == 'Norway', 'iso_a3'] = 'NOR'
world.loc[world['name'] == 'N. Cyprus', 'iso_a3'] = 'CYP'
world.loc[world['name'] == 'Somaliland', 'iso_a3'] = 'SOM'
world.loc[world['name'] == 'Kosovo', 'iso_a3'] = 'RKS'

world.columns=['pop_est', 'continent', 'name', 'Code', 'gdp_md_est', 'geometry']

merged_df = pd.merge(world, mismanaged_plastic_df, how ="left", on ="Code") #merge the df for the data and the one with the countries codes
merged_df.set_index("name", inplace = True) #use names as indices

merged_df.plot(column = "Mismanaged plastic waste per capita (kg per year)", legend=True,
               scheme = "UserDefined",edgecolor = "black",
               legend_kwds = {"labels" : ["< 5 kg", "5-10 kg", "10-15 kg", "15-20 kg", "> 20 kg"], "loc": "lower right"},
               classification_kwds=dict(bins=[5, 10, 15, 20, 60]),missing_kwds = {
        "color": "lightgrey",
        "edgecolor": "k",
        "hatch": "////",
        "label": "Missing data",
    }, cmap='OrRd') #make everything look nicer

plt.savefig(fname= "figures/mismanaged_plastic_waste_per_capita.svg", format = "svg")
#plt.show()