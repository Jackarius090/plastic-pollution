import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

all_countries_df = pd.read_csv("data/country_data/waste_all_countries_data.csv")

grouped = all_countries_df.groupby("Country") #group the data based on the country

sns.set_theme(style="darkgrid")

for country, group in grouped: #use the groups to make custom graphs for each country
    #plt.figure()

    group.plot(x = "Year", y = "Plastic_waste_per_capita")

    plt.title(f'Plastic Waste Per Capita in {country}')
    plt.xlabel('Year')
    plt.ylabel('Plastic Waste Per Capita (Kg per person)')
    # Calculate ymin and ymax based on group data with some padding
    ymin = group["Plastic_waste_per_capita"].min() * 0.9  # 10% below the min value
    ymax = group["Plastic_waste_per_capita"].max() * 1.1  # 10% above the max value

    # Set y-axis limits
    plt.ylim(ymin, ymax)
    #plt.show()
    plt.savefig(fname=f"figures/{country}_data/waste_per_capita_{country}.svg", format="svg")