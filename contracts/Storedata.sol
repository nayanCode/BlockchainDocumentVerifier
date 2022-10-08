pragma solidity >=0.4.22;

contract Storedata{

     address public owner = msg.sender;
    struct Student{
uint id, 
string fullname, 
int yearofpassing, 
string city, 
string gender, 
string department, 
string email,
string mobileNum,
string deparmentName,
string certificatetype
    }

}


