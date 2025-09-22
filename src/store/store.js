import { useAuthStore } from '@/features/auth/store/auth'
import { supabase } from '@/services/supabase'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useAppStore = defineStore('store', () => {
  const houses = reactive([
    {
      id: 1,
      name: 'Cozy Cottage',
      price: 250000,
      address: '123 Maple St, Springfield',
      rating: 4.2,
      reviewCounts: 15,
      details: [
        { unit: 'Square Feet', value: 1200, icon: '/assets/icons/house-size-icon.svg' },
        { unit: 'Bedrooms', value: 2, icon: '/assets/icons/bedroom-icon.svg' },
        { unit: 'Bathrooms', value: 1, icon: '/assets/icons/bathroom-icon.svg' },
      ],
      facilities: [
        { name: 'car parking', icon: '/assets/icons/car-parking-icon.svg' },
        { name: 'wi-fi', icon: '/assets/icons/wifi-icon.svg' },
      ],
      gallery: ['https://example.com/house1/img1.jpg', 'https://example.com/house1/img2.jpg'],
      reviews: [
        {
          reviewerName: 'Alice Smith',
          rate: 4,
          reviewDate: '2025-01-10',
          content: 'Lovely place, great location!',
          reviewerPicture: 'https://example.com/reviewer1.jpg',
        },
      ],
    },
    {
      id: 2,
      name: 'Modern Villa',
      price: 450000,
      address: '456 Oak Ave, Rivertown',
      rating: 4.8,
      reviewCounts: 22,
      details: [
        { unit: 'Square Feet', value: 2000, icon: '/assets/icons/house-size-icon.svg' },
        { unit: 'Bedrooms', value: 4, icon: '/assets/icons/bedroom-icon.svg' },
        { unit: 'Bathrooms', value: 3, icon: '/assets/icons/bathroom-icon.svg' },
      ],
      facilities: [
        { name: 'car parking', icon: '/assets/icons/car-parking-icon.svg' },
        { name: 'swimming', icon: '/assets/icons/swimming-icon.svg' },
        { name: 'gym', icon: '/assets/icons/gym-icon.svg' },
        { name: 'wi-fi', icon: '/assets/icons/wifi-icon.svg' },
      ],
      gallery: ['https://example.com/house2/img1.jpg', 'https://example.com/house2/img2.jpg'],
      reviews: [
        {
          reviewerName: 'Bob Johnson',
          rate: 5,
          reviewDate: '2025-03-15',
          content: 'Amazing amenities!',
          reviewerPicture: 'https://example.com/reviewer2.jpg',
        },
      ],
    },
    {
      id: 3,
      name: 'Urban Loft',
      price: 320000,
      address: '789 Pine Rd, Cityville',
      rating: 4.0,
      reviewCounts: 10,
      details: [
        { unit: 'Square Feet', value: 1500, icon: '/assets/icons/house-size-icon.svg' },
        { unit: 'Bedrooms', value: 3, icon: '/assets/icons/bedroom-icon.svg' },
        { unit: 'Bathrooms', value: 2, icon: '/assets/icons/bathroom-icon.svg' },
      ],
      facilities: [
        { name: 'wi-fi', icon: '/assets/icons/wifi-icon.svg' },
        { name: 'restaurant', icon: '/assets/icons/restaurant-icon.svg' },
      ],
      gallery: ['https://example.com/house3/img1.jpg', 'https://example.com/house3/img2.jpg'],
      reviews: [
        {
          reviewerName: 'Clara Brown',
          rate: 4,
          reviewDate: '2025-02-20',
          content: 'Great for city living.',
          reviewerPicture: 'https://example.com/reviewer3.jpg',
        },
      ],
    },
    {
      id: 4,
      name: 'Family Home',
      price: 380000,
      address: '101 Cedar Ln, Suburbia',
      rating: 4.5,
      reviewCounts: 18,
      details: [
        { unit: 'Square Feet', value: 1800, icon: '/assets/icons/house-size-icon.svg' },
        { unit: 'Bedrooms', value: 3, icon: '/assets/icons/bedroom-icon.svg' },
        { unit: 'Bathrooms', value: 2, icon: '/assets/icons/bathroom-icon.svg' },
      ],
      facilities: [
        { name: 'car parking', icon: '/assets/icons/car-parking-icon.svg' },
        { name: 'wi-fi', icon: '/assets/icons/wifi-icon.svg' },
      ],
      gallery: ['https://example.com/house4/img1.jpg', 'https://example.com/house4/img2.jpg'],
      reviews: [
        {
          reviewerName: 'David Lee',
          rate: 4,
          reviewDate: '2025-04-05',
          content: 'Perfect for families.',
          reviewerPicture: 'https://example.com/reviewer4.jpg',
        },
      ],
    },
    {
      id: 5,
      name: 'Luxury Condo',
      price: 600000,
      address: '202 Birch St, Downtown',
      rating: 4.9,
      reviewCounts: 25,
      details: [
        { unit: 'Square Feet', value: 2200, icon: '/assets/icons/house-size-icon.svg' },
        { unit: 'Bedrooms', value: 4, icon: '/assets/icons/bedroom-icon.svg' },
        { unit: 'Bathrooms', value: 3, icon: '/assets/icons/bathroom-icon.svg' },
      ],
      facilities: [
        { name: 'car parking', icon: '/assets/icons/car-parking-icon.svg' },
        { name: 'swimming', icon: '/assets/icons/swimming-icon.svg' },
        { name: 'gym', icon: '/assets/icons/gym-icon.svg' },
        { name: 'restaurant', icon: '/assets/icons/restaurant-icon.svg' },
        { name: 'wi-fi', icon: '/assets/icons/wifi-icon.svg' },
      ],
      gallery: ['https://example.com/house5/img1.jpg', 'https://example.com/house5/img2.jpg'],
      reviews: [
        {
          reviewerName: 'Emma Wilson',
          rate: 5,
          reviewDate: '2025-05-12',
          content: 'Luxury at its best!',
          reviewerPicture: 'https://example.com/reviewer5.jpg',
        },
      ],
    },
    {
      id: 6,
      name: 'Rustic Retreat',
      price: 200000,
      address: '303 Elm Dr, Countryside',
      rating: 4.1,
      reviewCounts: 12,
      details: [
        { unit: 'Square Feet', value: 1000, icon: '/assets/icons/house-size-icon.svg' },
        { unit: 'Bedrooms', value: 2, icon: '/assets/icons/bedroom-icon.svg' },
        { unit: 'Bathrooms', value: 1, icon: '/assets/icons/bathroom-icon.svg' },
      ],
      facilities: [{ name: 'car parking', icon: '/assets/icons/car-parking-icon.svg' }],
      gallery: ['https://example.com/house6/img1.jpg', 'https://example.com/house6/img2.jpg'],
      reviews: [
        {
          reviewerName: 'Frank Davis',
          rate: 4,
          reviewDate: '2025-06-01',
          content: 'Peaceful and cozy.',
          reviewerPicture: 'https://example.com/reviewer6.jpg',
        },
      ],
    },
    {
      id: 7,
      name: 'City Apartment',
      price: 280000,
      address: '404 Spruce St, Metropolis',
      rating: 3.9,
      reviewCounts: 8,
      details: [
        { unit: 'Square Feet', value: 900, icon: '/assets/icons/house-size-icon.svg' },
        { unit: 'Bedrooms', value: 1, icon: '/assets/icons/bedroom-icon.svg' },
        { unit: 'Bathrooms', value: 1, icon: '/assets/icons/bathroom-icon.svg' },
      ],
      facilities: [
        { name: 'wi-fi', icon: '/assets/icons/wifi-icon.svg' },
        { name: 'restaurant', icon: '/assets/icons/restaurant-icon.svg' },
      ],
      gallery: ['https://example.com/house7/img1.jpg', 'https://example.com/house7/img2.jpg'],
      reviews: [
        {
          reviewerName: 'Grace Kim',
          rate: 3,
          reviewDate: '2025-07-10',
          content: 'Good for singles.',
          reviewerPicture: 'https://example.com/reviewer7.jpg',
        },
      ],
    },
    {
      id: 8,
      name: 'Suburban Bungalow',
      price: 350000,
      address: '505 Willow Ave, Greenfields',
      rating: 4.3,
      reviewCounts: 20,
      details: [
        { unit: 'Square Feet', value: 1600, icon: '/assets/icons/house-size-icon.svg' },
        { unit: 'Bedrooms', value: 3, icon: '/assets/icons/bedroom-icon.svg' },
        { unit: 'Bathrooms', value: 2, icon: '/assets/icons/bathroom-icon.svg' },
      ],
      facilities: [
        { name: 'car parking', icon: '/assets/icons/car-parking-icon.svg' },
        { name: 'wi-fi', icon: '/assets/icons/wifi-icon.svg' },
      ],
      gallery: ['https://example.com/house8/img1.jpg', 'https://example.com/house8/img2.jpg'],
      reviews: [
        {
          reviewerName: 'Henry Moore',
          rate: 4,
          reviewDate: '2025-08-15',
          content: 'Spacious and modern.',
          reviewerPicture: 'https://example.com/reviewer8.jpg',
        },
      ],
    },
    {
      id: 9,
      name: 'Penthouse Suite',
      price: 750000,
      address: '606 Chestnut Blvd, Uptown',
      rating: 4.7,
      reviewCounts: 30,
      details: [
        { unit: 'Square Feet', value: 2500, icon: '/assets/icons/house-size-icon.svg' },
        { unit: 'Bedrooms', value: 5, icon: '/assets/icons/bedroom-icon.svg' },
        { unit: 'Bathrooms', value: 4, icon: '/assets/icons/bathroom-icon.svg' },
      ],
      facilities: [
        { name: 'car parking', icon: '/assets/icons/car-parking-icon.svg' },
        { name: 'swimming', icon: '/assets/icons/swimming-icon.svg' },
        { name: 'gym', icon: '/assets/icons/gym-icon.svg' },
        { name: 'wi-fi', icon: '/assets/icons/wifi-icon.svg' },
      ],
      gallery: ['https://example.com/house9/img1.jpg', 'https://example.com/house9/img2.jpg'],
      reviews: [
        {
          reviewerName: 'Isabella Clark',
          rate: 5,
          reviewDate: '2025-09-01',
          content: 'Stunning views!',
          reviewerPicture: 'https://example.com/reviewer9.jpg',
        },
      ],
    },
    {
      id: 10,
      name: 'Country Estate',
      price: 500000,
      address: '707 Laurel Rd, Ruralville',
      rating: 4.4,
      reviewCounts: 16,
      details: [
        { unit: 'Square Feet', value: 3000, icon: '/assets/icons/house-size-icon.svg' },
        { unit: 'Bedrooms', value: 4, icon: '/assets/icons/bedroom-icon.svg' },
        { unit: 'Bathrooms', value: 3, icon: '/assets/icons/bathroom-icon.svg' },
      ],
      facilities: [
        { name: 'car parking', icon: '/assets/icons/car-parking-icon.svg' },
        { name: 'swimming', icon: '/assets/icons/swimming-icon.svg' },
      ],
      gallery: ['https://example.com/house10/img1.jpg', 'https://example.com/house10/img2.jpg'],
      reviews: [
        {
          reviewerName: 'James Taylor',
          rate: 4,
          reviewDate: '2025-09-10',
          content: 'Great for nature lovers.',
          reviewerPicture: 'https://example.com/reviewer10.jpg',
        },
      ],
    },
  ])

  const bookedEstates = ref([])

  const authStore = useAuthStore()

  async function loadbookedEstates() {
    await authStore.getUser()
    if (!authStore.user) return false
    let { data } = await supabase.from('bookedEstates').select('estate_id')
    bookedEstates.value = data.map((e) => e.estate_id)

    houses.forEach((house) => {
      house.isBooked = bookedEstates.value.includes(house.id)
    })
  }

  async function toggleBookedEstate(house) {
    await authStore.getUser()
    if (!authStore.user) {
      alert('Please login first')
      return
    }
    if (house.isBooked) {
      await supabase
        .from('bookedEstates')
        .delete()
        .match({ user_id: authStore.user.id, estate_id: house.id })
      house.isBooked = false
    } else {
      await supabase
        .from('bookedEstates')
        .insert([{ user_id: authStore.user.id, estate_id: house.id }])
      house.isBooked = true
    }
  }

  function findHouseById(id) {
    return houses.find((house) => house.id === id)
  }

  return { houses, bookedEstates, loadbookedEstates, toggleBookedEstate, findHouseById }
})
