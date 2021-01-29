import React, { useState } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import { useSnackbar } from 'notistack';
import { FormModal } from '../Modal/Modal';
import { CaloriesForm } from '../Modal/initialFormValues';
import './CaloriesTable.css';

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Jogurt', 159, 6.0, 24, 4.0),
  createData('Kanapka', 237, 9.0, 37, 4.3),
  createData('Ekler', 262, 16.0, 24, 6.0),
  createData('Ser', 345, 16.7, 2, 23.3),
  createData('Czkolada', 510, 15, 55, 9.4),
];

export const CaloriesTable = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [foodList, setFoodList] = useState(rows);
  const [isModalOpen, setIsOpen] = useState<boolean>(false);

  const addFood = ({ name, calories, fat, carbs, protein }: CaloriesForm) => {
    const newFood = createData(name, calories, fat, carbs, protein);
    setFoodList([...foodList, newFood]);
    setIsOpen(false);
    enqueueSnackbar('Pomyślnie dodano produkt!', { variant: 'success' });
  };

  const removeFood = (index: number) => {
    const newFoodList = [...foodList];
    newFoodList.splice(index, 1);
    setFoodList(newFoodList);
    enqueueSnackbar('Usunięto produkt!', { variant: 'success' });
  };

  return (
    <div className="calories-table">
      <TableContainer style={{ marginTop: '50px' }} component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>W 100g produktu</TableCell>
              <TableCell align="right">Kalorie</TableCell>
              <TableCell align="right">Tłuszcz&nbsp;(g)</TableCell>
              <TableCell align="right">Węglowodany&nbsp;(g)</TableCell>
              <TableCell align="right">Białko&nbsp;(g)</TableCell>
              <TableCell align="right">Usuń</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {foodList.map((food, index) => (
              <TableRow key={food.name}>
                <TableCell component="th" scope="row">
                  {food.name}
                </TableCell>
                <TableCell align="right">{food.calories}</TableCell>
                <TableCell align="right">{food.fat}</TableCell>
                <TableCell align="right">{food.carbs}</TableCell>
                <TableCell align="right">{food.protein}</TableCell>
                <TableCell align="right">
                  <DeleteIcon onClick={() => removeFood(index)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        color="primary"
        variant="contained"
        onClick={() => setIsOpen(true)}
      >
        Dodaj produkt
      </Button>
      <FormModal
        isOpen={isModalOpen}
        handleClose={() => setIsOpen(false)}
        handleSubmit={addFood}
      />
    </div>
  );
};
