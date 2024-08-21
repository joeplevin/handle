import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {ListItem} from '@rneui/themed';
import {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

const InventoryList = ({inventory}) => {
  const [expanded, setExpanded] = useState([]);
  for (let i = 0; i < inventory.length; i++) {
    console.log(inventory[i]['invoiceItems']);
  }
  useEffect(() => {
    setExpanded([]);
  }, [inventory]);
  return (
    <View>
      <ScrollView>
        {inventory
          ? inventory.map((item, index) => {
              if (item['invoiceItems'].length > 0) {
                return (
                  <ListItem.Accordion
                    key={index}
                    content={
                      <>
                        <ListItem.Content>
                          <ListItem.Title>{item.name}</ListItem.Title>
                          <ListItem.Subtitle>
                            {item['totalQuantity'] +
                              ' x ' +
                              item['unitWeight'] +
                              ' ' +
                              item['unitMeasurement']}
                          </ListItem.Subtitle>
                        </ListItem.Content>
                      </>
                    }
                    isExpanded={expanded.includes(item['id'])}
                    onPress={() => {
                      if (expanded.includes(item['id'])) {
                        setExpanded(expanded.filter(id => id !== item['id']));
                      } else {
                        setExpanded([...expanded, item['id']]);
                      }
                    }}>
                    {item['invoiceItems']
                      ? item['invoiceItems'].map((linkedItem, index) => (
                          <ListItem key={index} bottomDivider>
                            <ListItem.Content>
                              <ListItem.Title>
                                {linkedItem['name']}
                              </ListItem.Title>
                            </ListItem.Content>
                          </ListItem>
                        ))
                      : null}
                  </ListItem.Accordion>
                );
              } else {
                return (
                  <ListItem key={index} bottomDivider>
                    <ListItem.Content>
                      <ListItem.Title>{item.name}</ListItem.Title>
                      <ListItem.Subtitle>
                        {item['totalQuantity'] +
                          ' x ' +
                          item['unitWeight'] +
                          ' ' +
                          item['unitMeasurement']}
                      </ListItem.Subtitle>
                    </ListItem.Content>
                  </ListItem>
                );
              }
            })
          : null}
      </ScrollView>
    </View>
  );
};

export default InventoryList;
