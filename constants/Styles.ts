import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2A2D34'
  },
  input: {
    height: 40,
    width: 200,
    backgroundColor: '#FFFFFF',
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    borderRadius:10,
    borderWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',

  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  list: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  link: {
    color: 'teal',
    fontSize: 12
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  linkTouch: {
    marginTop: 15,
    paddingVertical: 15,
  },
  calendar: {
    flex: 2,
    alignItems: 'center'
  },
  blogButton: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
    backgroundColor:'white'
  }
});
