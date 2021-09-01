/* eslint-disable no-undef */
import { useState } from 'react';

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import {
  hoursList,
  minutesList,
  monthsList,
  yearsList,
} from '../constants/datetime';

const schema = yup.object().shape({
  name: yup.string().required('A name is required'),
  email: yup.string().email().required('An email is required'),
  month: yup.number().required(),
  day: yup.number().required(),
  year: yup.number().required(),
  hour: yup.number().required(),
  minute: yup.number().required(),
  period: yup.string().required(),
});

const ReservationForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const errorDate = errors.day || errors.month || errors.year;
  const errorTime = errors.hour || errors.minute;

  function onSubmit(values) {
    return new Promise((resolve) => {
      const updatedValues = { seats: seats, ...values };
      setTimeout(() => {
        alert(JSON.stringify(updatedValues, null, 2));
        resolve();
        reset();
      }, 2000);
    });
  }

  const [seats, setSeats] = useState(1);

  function handleSeatsDecrement() {
    if (seats > 1) {
      setSeats(seats - 1);
    }
  }

  function handleSeatsIncrement() {
    if (seats < 10) {
      setSeats(seats + 1);
    }
  }

  return (
    <Box
      bg="white"
      maxW={{ base: 'full', sm: '540px' }}
      mx="auto"
      p="8"
      shadow="2xl"
      pos="relative"
      top="-140px"
      id="form"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <FormControl isInvalid={errors.name} id="name" mb="8">
          <Flex direction="column" pos="relative">
            <Input
              id="name"
              placeholder="Name"
              _placeholder={{ color: 'gray.500' }}
              bg="white"
              color="primary.codgray"
              fontSize="md"
              {...register('name', {
                required: 'This is required',
              })}
              variant="flushed"
              iconColor="primary.beaver"
              borderBottomColor="secondary.flushedgray"
            />
            <FormErrorMessage fontSize="11px" pos="absolute" bottom="-22px">
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </Flex>
        </FormControl>

        {/* Email */}
        <FormControl isInvalid={errors.name} id="email" mb="8">
          <Flex direction="column" pos="relative">
            <Input
              id="email"
              placeholder="Email"
              _placeholder={{ color: 'gray.500' }}
              bg="white"
              color="primary.codgray"
              fontSize="md"
              {...register('email', {
                required: 'This is required',
              })}
              variant="flushed"
              iconColor="primary.beaver"
              borderBottomColor="secondary.flushedgray"
            />
            <FormErrorMessage fontSize="11px" pos="absolute" bottom="-22px">
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </Flex>
        </FormControl>

        {/* Date */}
        <Flex direction={{ base: 'column', md: 'row' }} mb="8">
          <Flex
            w={{ md: '200px' }}
            direction="column"
            align={{ base: 'center', m: 'flex-start' }}
            justify={{ base: 'flex-start', md: 'center' }}
          >
            <Text
              textStyle="body1"
              color={errorDate ? 'red.500' : 'primary.codgray'}
            >
              Pick a date
            </Text>
            <Text fontSize="11px" color="red.500">
              {(errors.day || errors.month || errors.year) &&
                'This field is incomplete'}
            </Text>
          </Flex>
          <Stack direction={{ base: 'column', sm: 'row' }} spacing="4" w="full">
            <FormControl isInvalid={errors.month} id="month">
              <Select
                placeholder="MM"
                variant="flushed"
                iconColor="primary.beaver"
                borderBottomColor="secondary.flushedgray"
                id="month"
                {...register('month', {
                  required: 'This is required',
                })}
              >
                {monthsList.map((month, index) => (
                  <option value={month} key={index}>
                    {month}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl isInvalid={errors.day} id="day">
              <Input
                id="day"
                type="number"
                min="1"
                max="31"
                placeholder="DD"
                _placeholder={{ color: 'gray.500' }}
                bg="white"
                color="primary.codgray"
                fontSize="md"
                {...register('day', {
                  required: 'This is required',
                })}
                variant="flushed"
                iconColor="primary.beaver"
                borderBottomColor="secondary.flushedgray"
              />
            </FormControl>
            <FormControl isInvalid={errors.year} id="year" minW="90px">
              <Select
                placeholder="YY"
                variant="flushed"
                iconColor="primary.beaver"
                borderBottomColor="secondary.flushedgray"
                id="year"
                {...register('year', {
                  required: 'This is required',
                })}
              >
                {yearsList.map((year, index) => (
                  <option value={year} key={index}>
                    {year}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </Flex>

        {/* Time */}
        <Flex direction={{ base: 'column', md: 'row' }} mb="8">
          <Flex w={{ md: '200px' }} direction="column" justify="center">
            <Text
              textStyle="body1"
              color={errorTime ? 'red.500' : 'primary.codgray'}
            >
              Pick a time
            </Text>
            <Text fontSize="11px" color="red.500">
              {errorTime && 'This field is incomplete'}
            </Text>
          </Flex>
          <Stack direction={{ base: 'column', sm: 'row' }} spacing="4" w="full">
            <FormControl isInvalid={errors.hour} id="hour">
              <Select
                placeholder="HH"
                variant="flushed"
                iconColor="primary.beaver"
                borderBottomColor="secondary.flushedgray"
                id="hour"
                {...register('hour', {
                  required: 'This is required',
                })}
              >
                {hoursList.map((hour, index) => (
                  <option value={hour} key={index}>
                    {hour}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl isInvalid={errors.minute} id="minute">
              <Select
                placeholder="MN"
                variant="flushed"
                iconColor="primary.beaver"
                borderBottomColor="secondary.flushedgray"
                id="minute"
                {...register('minute', {
                  required: 'This is required',
                })}
              >
                {minutesList.map((minute, index) => (
                  <option value={minute} key={index}>
                    {minute}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl isInvalid={errors.period} id="period">
              <Select
                variant="flushed"
                iconColor="primary.beaver"
                borderBottomColor="secondary.flushedgray"
                defaultValue="AM"
                id="period"
                {...register('period', {
                  required: 'This is required',
                })}
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </Select>
            </FormControl>
          </Stack>
        </Flex>

        {/* Seats */}
        <Flex
          mb="6"
          borderBottom="1px"
          borderBottomColor="secondary.flushedgray"
          w="full"
          direction={{ base: 'column', sm: 'row' }}
          justify="space-between"
          align="center"
        >
          <Button
            variant="flushed"
            iconColor="primary.beaver"
            borderBottomColor="secondary.flushedgray"
            onClick={handleSeatsDecrement}
          >
            -
          </Button>
          <Heading as="p" variant="h3l">
            {seats} people
          </Heading>
          <Button
            variant="flushed"
            iconColor="primary.beaver"
            borderBottomColor="secondary.flushedgray"
            onClick={handleSeatsIncrement}
          >
            +
          </Button>
        </Flex>

        <Button variant="black" type="submit" w="full" isLoading={isSubmitting}>
          Make reservation
        </Button>
      </form>
    </Box>
  );
};

export default ReservationForm;
