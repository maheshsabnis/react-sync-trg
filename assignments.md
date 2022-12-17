# Day 1 Date: 09-Dec-2022
1. Modify the Dynamically generated table to contains 'checkbox' in each row.
2. Below the table add a 'Delete' button, when this button is clicked, all rows having checkbox as 'checked' must be deleted
3. When table header is clicked, the data in the table must be sorted in ascending order based on value of each cell in that column

# Day 2 Date: 11-Dec-2022

1. Modify the 'SelectContextEventComponent' to make sure that, when the 'Clear' button is clicked, the selected values for 'SelectContextEventComponent' are cleared.
2. Create a DataGridComponent using HTML Tabkle with following guidelines
    - Use React.Context to pass following values from parent to DataGridComponent
        - A Collection using which tyhe DataGridComponent will generate Rows and Columns   
        - A 'CanDelete' property, this is boolean property, if this is true then DataGridComponent will generate 'Delete' button for each Row
        - A 'CanSort' property, this is boolen
        - A 'SortKey' property, this will be the name of the property based on which the DataGridComponent will show data in sorted order when its shows collection in it. The sorting will be performed by DataGridComponent only when 'CanSort' is true
        - (Optional) A 'pageSize' property, based on this the DataGridComponent will generate paginated UI  with data shown per page based on the value of 'pageSize'

# Day 3: Date:17-Dec-2022

1. Create a Higher-Order-Component, that will be used to configure following features
    - A Button to Sort / Reverse each columns when a Parent components wants to set 'canSort' property as 'true'
    - Apply alternate colors for Table Rows when 'alternatingColor' property is set to 'true' by the parent
    - Apply CSS on hover event of mouse on table row to change the background color of Table row when the 'isHoveringEffect' proeprty is set to 'true'  by parent   
