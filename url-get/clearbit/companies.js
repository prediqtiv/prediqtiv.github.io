

function getCompaniesFromText( txt ){

	return txt.split( '\n' );


}



var companiesText =
`3M Company
Abbott Laboratories
AbbVie Inc.
Accenture plc
Activision Blizzard
Acuity Brands Inc
Adobe Systems Inc
Advanced Micro Devices Inc
Advance Auto Parts
AES Corp
Aetna Inc
Affiliated Managers Group Inc
AFLAC Inc
Agilent Technologies Inc
Air Products & Chemicals Inc
Akamai Technologies Inc
Alaska Air Group Inc
Albemarle Corp
Alexandria Real Estate Equities Inc
Allergan, Plc
Alliant Energy Corp
Alexion Pharmaceuticals
Allegion
Alliance Data Systems
Allstate Corp
Alphabet Inc Class A
Alphabet Inc Class C
Altria Group Inc
Amazon.com Inc
Ameren Corp
American Airlines Group
American Electric Power
American Express Co
American International Group, Inc.
American Tower Corp A
American Water Works Company Inc
Ameriprise Financial
AmerisourceBergen Corp
AMETEK Inc
Amgen Inc
Amphenol Corp
Anadarko Petroleum Corp
Analog Devices, Inc.
Anthem Inc.
Aon plc
Apache Corporation
Apartment Investment & Management
Apple Inc.
Applied Materials Inc
Archer-Daniels-Midland Co
Arconic Inc
Arthur J. Gallagher & Co.
Assurant Inc
AT&T Inc
Autodesk Inc
Automatic Data Processing
AutoNation Inc
AutoZone Inc
AvalonBay Communities, Inc.
Avery Dennison Corp
Baker Hughes Inc
Ball Corp
Bank of America Corp
The Bank of New York Mellon Corp.
Bard (C.R.) Inc.
Baxter International Inc.
BB&T Corporation
Becton Dickinson
Bed Bath & Beyond
Berkshire Hathaway
Best Buy Co. Inc.
Biogen Inc.
BlackRock
Block H&R
Boeing Company
BorgWarner
Boston Properties
Boston Scientific
Bristol-Myers Squibb
Broadcom
Brown-Forman Corp.
C. H. Robinson Worldwide
CA, Inc.
Cabot Oil & Gas
Campbell Soup
Capital One Financial
Cardinal Health Inc.
CBOE Holdings
Carmax Inc
Carnival Corp.
Caterpillar Inc.
CBRE Group
CBS Corp.
Celgene Corp.
Centene Corporation
CenterPoint Energy
CenturyLink Inc
Cerner
CF Industries Holdings Inc
Charles Schwab Corporation
Charter Communications
Chesapeake Energy
Chevron Corp.
Chipotle Mexican Grill
Chubb Limited
Church & Dwight
CIGNA Corp.
Cimarex Energy
Cincinnati Financial
Cintas Corporation
Cisco Systems
Citigroup Inc.
Citizens Financial Group
Citrix Systems
The Clorox Company
CME Group Inc.
CMS Energy
Coach Inc.
Coca-Cola Company (The)
Cognizant Technology Solutions
Colgate-Palmolive
Comcast Corp.
Comerica Inc.
Conagra Brands
Concho Resources
ConocoPhillips
Consolidated Edison
Constellation Brands
The Cooper Companies
Corning Inc.
Costco Wholesale Corp.
Coty, Inc
Crown Castle International Corp.
CSRA Inc.
CSX Corp.
Cummins Inc.
CVS Health
D. R. Horton
Danaher Corp.
Darden Restaurants
DaVita Inc.
Deere & Co.
Delphi Automotive PLC
Delta Air Lines Inc.
Dentsply Sirona
Devon Energy Corp.
Digital Realty Trust Inc
Discover Financial Services
Discovery Communications-A
Discovery Communications-C
Dish Network
Dollar General
Dollar Tree
Dominion Resources
Dover Corp.
Dow Chemical
Dr Pepper Snapple Group
DTE Energy Co.
Du Pont (E.I.)
Duke Energy
DXC Technology
E*Trade
Eastman Chemical
Eaton Corporation
eBay Inc.
Ecolab Inc.
Edison Int'l
Edwards Lifesciences
Electronic Arts
Emerson Electric Company
Entergy Corp.
Envision Healthcare
EOG Resources
EQT Corporation
Equifax Inc.
Equinix
Equity Residential
Essex Property Trust, Inc.
Estee Lauder Cos.
Eversource Energy
Exelon Corp.
Expedia Inc.
Expeditors International
Express Scripts
Extra Space Storage
Exxon Mobil Corp.
F5 Networks
Facebook, Inc.
Fastenal Co
Federal Realty Investment Trust
FedEx Corporation
Fidelity National Information Services
Fifth Third Bancorp
FirstEnergy Corp
Fiserv Inc
FLIR Systems
Flowserve Corporation
Fluor Corp.
FMC Corporation
Foot Locker Inc
Ford Motor
Fortive Corp
Fortune Brands Home & Security
Franklin Resources
Freeport-McMoRan Inc.
Gap Inc.
Garmin Ltd.
Gartner Inc
General Dynamics
General Electric
General Growth Properties Inc.
General Mills
General Motors
Genuine Parts
Gilead Sciences
Global Payments Inc
Goldman Sachs Group
Goodyear Tire & Rubber
Grainger (W.W.) Inc.
Halliburton Co.
Hanesbrands Inc
Harley-Davidson
Harris Corporation
Hartford Financial Svc.Gp.
Hasbro Inc.
HCA Holdings
HCP Inc.
Helmerich & Payne
Henry Schein
The Hershey Company
Hess Corporation
Hewlett Packard Enterprise
Hologic
Home Depot
Honeywell Int'l Inc.
Hormel Foods Corp.
Host Hotels & Resorts
HP Inc.
Humana Inc.
Huntington Bancshares
IDEXX Laboratories
Illinois Tool Works
Illumina Inc
Ingersoll-Rand PLC
Intel Corp.
Intercontinental Exchange
International Business Machines
Incyte
International Paper
Interpublic Group
Intl Flavors & Fragrances
Intuit Inc.
Intuitive Surgical Inc.
Invesco Ltd.
Iron Mountain Incorporated
Jacobs Engineering Group
J. B. Hunt Transport Services
JM Smucker
Johnson & Johnson
Johnson Controls International
JPMorgan Chase & Co.
Juniper Networks
Kansas City Southern
Kellogg Co.
KeyCorp
Kimberly-Clark
Kimco Realty
Kinder Morgan
KLA-Tencor Corp.
Kohl's Corp.
Kraft Heinz Co
Kroger Co.
L Brands Inc.
L-3 Communications Holdings
Laboratory Corp. of America Holding
Lam Research
Leggett & Platt
Lennar Corp.
Level 3 Communications
Leucadia National Corp.
Lilly (Eli) & Co.
Lincoln National
LKQ Corporation
Lockheed Martin Corp.
Loews Corp.
Lowe's Cos.
LyondellBasell
M&T Bank Corp.
Macerich
Macy's Inc.
Mallinckrodt Plc
Marathon Oil Corp.
Marathon Petroleum
Marriott Int'l.
Marsh & McLennan
Martin Marietta Materials
Masco Corp.
Mastercard Inc.
Mattel Inc.
McCormick & Co.
McDonald's Corp.
McKesson Corp.
Mead Johnson
Medtronic plc
Merck & Co.
MetLife Inc.
Mettler Toledo
Michael Kors Holdings
Microchip Technology
Micron Technology
Microsoft Corp.
Mid-America Apartments
Mohawk Industries
Molson Coors Brewing Company
Mondelez International
Monsanto Co.
Monster Beverage
Moody's Corp
Morgan Stanley
The Mosaic Company
Motorola Solutions Inc.
Murphy Oil
Mylan N.V.
Nasdaq, Inc.
National Oilwell Varco Inc.
Navient
NetApp
Netflix Inc.
Newell Brands
Newfield Exploration Co
Newmont Mining Corporation
News Corp. Class A
News Corp. Class B
NextEra Energy
Nielsen Holdings
Nike
NiSource Inc.
Noble Energy Inc
Nordstrom
Norfolk Southern Corp.
Northern Trust Corp.
Northrop Grumman Corp.
NRG Energy
Nucor Corp.
Nvidia Corporation
O'Reilly Automotive
Occidental Petroleum
Omnicom Group
ONEOK
Oracle Corp.
PACCAR Inc.
Parker-Hannifin
Patterson Companies
Paychex Inc.
PayPal
Pentair Ltd.
People's United Financial
PepsiCo Inc.
PerkinElmer
Perrigo
Pfizer Inc.
PG&E Corp.
Philip Morris International
Phillips 66
Pinnacle West Capital
Pioneer Natural Resources
PNC Financial Services
Polo Ralph Lauren Corp.
PPG Industries
PPL Corp.
Praxair Inc.
Priceline.com Inc
Principal Financial Group
Procter & Gamble
Progressive Corp.
Prologis
Prudential Financial
Public Serv. Enterprise Inc.
Public Storage
Pulte Homes Inc.
PVH Corp.
Qorvo
Quanta Services Inc.
QUALCOMM Inc.
Quest Diagnostics
Range Resources Corp.
Raymond James Financial Inc.
Raytheon Co.
Realty Income Corporation
Red Hat Inc.
Regency Centers Corporation
Regeneron
Regions Financial Corp.
Republic Services Inc
Reynolds American Inc.
Robert Half International
Rockwell Automation Inc.
Rockwell Collins
Roper Technologies
Ross Stores
Royal Caribbean Cruises Ltd
Ryder System
Salesforce.com
SCANA Corp
Schlumberger Ltd.
Scripps Networks Interactive Inc.
Seagate Technology
Sealed Air
Sempra Energy
Sherwin-Williams
Signet Jewelers
Simon Property Group Inc
Skyworks Solutions
SL Green Realty
Snap-On Inc.
Southern Co.
Southwest Airlines
S&P Global, Inc.
Stanley Black & Decker
Staples Inc.
Starbucks Corp.
State Street Corp.
Stericycle Inc
Stryker Corp.
SunTrust Banks
Symantec Corp.
Synchrony Financial
Synopsys Inc.
Sysco Corp.
T. Rowe Price Group
Target Corp.
TE Connectivity Ltd.
TechnipFMC
Tegna, Inc.
Teradata Corp.
Tesoro Petroleum Co.
Texas Instruments
Textron Inc.
Thermo Fisher Scientific
Tiffany & Co.
Time Warner Inc.
TJX Companies Inc.
Torchmark Corp.
Total System Services
Tractor Supply Company
TransDigm Group
Transocean
The Travelers Companies Inc.
TripAdvisor
Twenty-First Century Fox Class A
Twenty-First Century Fox Class B
Tyson Foods
UDR Inc
Ulta Salon Cosmetics & Fragrance Inc
U.S. Bancorp
Under Armour Class C
Under Armour Class A
Union Pacific
United Continental Holdings
United Health Group Inc.
United Parcel Service
United Rentals, Inc.
United Technologies
Universal Health Services, Inc.
Unum Group
V.F. Corp.
Valero Energy
Varian Medical Systems
Ventas Inc
Verisign Inc.
Verisk Analytics
Verizon Communications
Vertex Pharmaceuticals Inc
Viacom Inc.
Visa Inc.
Vornado Realty Trust
Vulcan Materials
Wal-Mart Stores
Walgreens Boots Alliance
The Walt Disney Company
Waste Management Inc.
Waters Corporation
Wec Energy Group Inc
Wells Fargo
Welltower Inc.
Western Digital
Western Union Co
WestRock Company
Weyerhaeuser Corp.
Whirlpool Corp.
Whole Foods Market
Williams Cos.
Willis Towers Watson
Wyndham Worldwide
Wynn Resorts Ltd
Xcel Energy Inc
Xerox Corp.
Xilinx Inc
XL Capital
Xylem Inc.
Yahoo Inc.
Yum! Brands Inc
Zimmer Biomet Holdings
Zions Bancorp
Zoetis
`;