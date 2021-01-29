import React, { useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { LoaderContext } from '../App/App';
import './Users.css';

export const Users = () => {
  const setIsLoading: any = useContext(LoaderContext)
  const [users, setUsers] = useState([]);

  const getUsers = useCallback(() => {
    setIsLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      setTimeout(() => {
        setIsLoading(false);
        setUsers(res.data);
      }, 1500);
    })
  }, [setIsLoading]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <TableContainer className="users-wrapper" component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Imię i nazwisko</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Telefon</TableCell>
            <TableCell align="right">Strona internetowa</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user: any) => (
            <TableRow key={user.name}>
              <TableCell align="right">{user.name}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.phone}</TableCell>
              <TableCell align="right">{user.website}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}