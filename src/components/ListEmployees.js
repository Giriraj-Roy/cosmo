import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import EmployeeCard from './EmployeeCard';
import NoEmployees from './NoEmployees';

const ListEmployees = () => {
  const renderItem = ({item}) => {
    return <EmployeeCard key={item} />;
  };

  return true ? (
    <>
      {
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 12, 13, 14, 15, 55, 66, 77]}
          renderItem={renderItem}
        />
      }
    </>
  ) : (
    <NoEmployees />
  );
};

export default ListEmployees;

const styles = StyleSheet.create({});
