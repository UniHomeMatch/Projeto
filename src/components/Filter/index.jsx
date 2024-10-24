import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { useMediaQuery, useTheme } from '@mui/material';

function valuetext(value) {
    return `${value}`;
}

// Preço
export function PriceSlider() {
    const [value, setValue] = useState([500, 3000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', padding: 1 }}>
            <Slider
                getAriaLabel={() => 'Price range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={50}
                max={5000}
                valueLabelFormat={(value) => `R$ ${value}`}
                sx={{
                    color: '#ffae52',
                    '& .MuiSlider-thumb': {
                        color: '#FF7A00',
                    },
                }}
            />
        </Box>
    );
}

// Área
export function AreaSlider() {
    const [value, setValue] = useState([67, 310]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', padding: 1 }}>
            <Slider
                getAriaLabel={() => 'Area range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={23}
                max={500}
                valueLabelFormat={(value) => `${value}m²`}
                sx={{
                    color: '#ffae52',
                    '& .MuiSlider-thumb': {
                        color: '#FF7A00',
                    },
                }}
            />
        </Box>
    );
}

// Seleção de Cidade e Estado
export function CitySelect() {
    const [cities, setCities] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios');
                const data = await response.json();
                const cityOptions = data.map((city) => ({
                    label: city.nome,
                    value: city.nome,
                }));
                setCities(cityOptions);
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        };

        fetchCities();
    }, []);

    return (
        <Box sx={{ width: '100%', padding: 1 }}>
            <Autocomplete
                disablePortal
                options={cities}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                inputValue={inputValue}
                sx={{ width: '100%' }}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                    <TextField {...params} label="Cidade" color='warning' />
                )}
            />
        </Box>
    );
}

export function StateSelect() {
    const [states, setStates] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const fetchStates = async () => {
            try {
                const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
                const data = await response.json();
                const stateOptions = data.map((state) => ({
                    label: state.nome,
                    value: state.sigla,
                }));
                setStates(stateOptions);
            } catch (error) {
                console.error('Error fetching states:', error);
            }
        };

        fetchStates();
    }, []);

    return (
        <Box sx={{ width: '100%', padding: 1 }}>
            <Autocomplete
                disablePortal
                options={states}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                inputValue={inputValue}
                sx={{ width: '100%' }}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                    <TextField {...params} label="Estado (UF)" color='warning' />
                )}
            />
        </Box>
    );
}

// Seleção de Gênero
export function SelectGenero() {
    const [genero, setGenero] = useState('');

    const handleChange = (event) => {
        setGenero(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: '100%' }}>
            <InputLabel
                id="genero-select"
                sx={{
                    '&.Mui-focused': {
                        color: '#FF7A00',
                    },
                }}
            >
                Gênero
            </InputLabel>
            <Select
                labelId="genero-select"
                id="genero-select"
                value={genero}
                onChange={handleChange}
                autoWidth
                label="Gênero"
                sx={{
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#FF7A00',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#FF7A00',
                    },
                }}
            >
                <MenuItem value={1}>Masculino</MenuItem>
                <MenuItem value={2}>Feminino</MenuItem>
                <MenuItem value={3}>Todos</MenuItem>
            </Select>
        </FormControl>
    );
}

// Entrada de Banheiros e Quartos
export function InputBanheiros() {
    return (
        <TextField
            id="banheiros"
            label="Banheiros"
            type="number"
            sx={{
                width: '100%',
                margin: 1,
                '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                        borderColor: '#FF7A00',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#FF7A00',
                    },
                },
                '& .MuiInputLabel-root': {
                    '&.Mui-focused': {
                        color: '#FF7A00',
                    },
                },
            }}
        />
    );
}

export function InputQuartos() {
    return (
        <TextField
            id="quartos"
            label="Quartos"
            type="number"
            sx={{
                width: '100%',
                margin: 1,
                '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                        borderColor: '#FF7A00',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#FF7A00',
                    },
                },
                '& .MuiInputLabel-root': {
                    '&.Mui-focused': {
                        color: '#FF7A00',
                    },
                },
            }}
        />
    );
}

// Componente principal adaptado
export const Filter = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                position: 'sticky',
                top: 0,
                left: 0,
                width: isSmallScreen ? '100%' : '250px',
                height: '100vh',
                boxShadow: '2px 0px 8px rgba(0, 0, 0, 0.1)',
                zIndex: 1000,
                borderRight: '1px solid #ddd',
                borderRadius: '25px',
                padding: 2,
                overflowY: 'auto',
            }}
        >
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <p>Preferência de gênero</p>
                        <SelectGenero />
                    </Grid>

                    <Grid item xs={12}>
                        <p>Preço</p>
                        <PriceSlider />
                    </Grid>

                    <Grid item xs={12}>
                        <p>Área</p>
                        <AreaSlider />
                    </Grid>

                    <Grid item xs={12}>
                        <p>Estado</p>
                        <StateSelect />
                    </Grid>

                    <Grid item xs={12}>
                        <p>Cidade</p>
                        <CitySelect />
                    </Grid>

                    <Grid item xs={12}>
                        <p>Quantidade de quartos</p>
                        <InputQuartos />
                    </Grid>

                    <Grid item xs={12}>
                        <p>Quantidade de banheiros</p>
                        <InputBanheiros />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
