import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

all_countries_df = pd.read_csv("data/country_data/recycled_all_countries_data.csv")

grouped = all_countries_df.groupby("Country") #group the data by country

sns.set_theme(style="darkgrid")

for country, group in grouped: #use the groups to make custom graphs for each country
    #plt.figure()

    group.plot(x = "Year", y = "Plastic_waste_recycled")

    plt.title(f'Recycled Plastic Waste in {country}')
    plt.xlabel('Year')
    plt.ylabel('Recycled Plastic Waste (Thousand Tonnes)')
    # Calculate ymin and ymax based on group data with some padding
    ymin = group["Plastic_waste_recycled"].min() * 0.9  # 10% below the min value
    ymax = group["Plastic_waste_recycled"].max() * 1.1  # 10% above the max value

    # Set y-axis limits
    plt.ylim(ymin, ymax)
    #plt.show()
    plt.savefig(fname=f"figures/{country}_data/recycled_{country}.svg", format="svg")


