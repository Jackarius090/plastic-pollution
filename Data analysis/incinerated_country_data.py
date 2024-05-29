import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

all_countries_df = pd.read_csv("data/country_data/OECD.ENV.EPI,DSD_WSTREAMS@DF_WSTREAMS,1.0+DNK+DEU+ITA+SWE+GBR.A.INC_RECOVERY..PLASTIC (1) - OECD.ENV.EPI,DSD_WSTREAMS@DF_WSTREAMS,1.0+DNK+DEU+ITA+SWE+GBR.A.INC_RECOVERY..PLASTIC (1).csv.csv")

grouped = all_countries_df.groupby("Country") #group the data by country

sns.set_theme(style="darkgrid")

for country, group in grouped: #use the groups to make custom graphs for each country
    #plt.figure()

    group.plot(x = "Year", y = "Waste_incinerate_energy_recovery", legend = False)

    plt.title(f'Plastic Waste Incinerated with Energy Recovery in {country}')
    plt.xlabel('Year')
    plt.ylabel('Plastic Waste Incinerated (Thousand Tonnes)')
    # Calculate ymin and ymax based on group data with some padding
    ymin = group["Waste_incinerate_energy_recovery"].min() * 0.9  # 10% below the min value
    ymax = group["Waste_incinerate_energy_recovery"].max() * 1.1  # 10% above the max value

    # Set y-axis limits
    plt.ylim(ymin, ymax)
    #plt.show()
    plt.savefig(fname=f"figures/{country}_data/incinerated_{country}.svg", format="svg")

