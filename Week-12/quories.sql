-- Find the item that has minimum weight.
SELECT MIN(COST) as Min_cost FROM ITEMS;


-- Find the different warehouses in “Pune”.
SELECT WNAME FROM WAREHOUSES WHERE LOCATION='Pune';

-- Find the details of items ordered by a customer “Mr. Patil”.
SELECT ITEMS.DESCRIPTION as Item FROM ORDER_ITEM_LIST JOIN CUSTOMER on CUSTOMER.CNO = ORDER_ITEM_LIST.customer JOIN ITEMS ON ITEMS.ITEM_NO = ORDER_ITEM_LIST.item where C_NAME ='Mr. Patil';

-- Find a Warehouse which has maximum stores.
select wid, count(sid) from WAREHOUSE_STORE_LIST group by wid order by count(sid) desc limit 1;
-- Find an item which is ordered for a minimum number of times.
SELECT item FROM Warehouse.ORDER_ITEM_LIST group by item order by count(item) desc limit 1;
-- Find the detailed orders given by each customer
SELECT CUSTOMER.C_NAME,ORDERS.ODATE,ITEMS.DESCRIPTION FROM Warehouse.CUSTOMER join ORDERS on CUSTOMER.CNO=ORDERS.CO_ID join ORDER_ITEM_LIST on ORDER_ITEM_LIST.orders = ORDERS.ONO join ITEMS on ORDER_ITEM_LIST.item=ITEMS.ITEM_NO order by C_NAME;