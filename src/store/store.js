import { useAuthStore } from '@/features/auth/store/auth'
import { supabase } from '@/services/supabase'
import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'

export const useAppStore = defineStore('store', () => {
  const houses = reactive([
    {
      id: 1,
      name: 'Cozy Cottage',
      price: 250000,
      address: '123 Maple St, Springfield',
      rating: 4.2,
      reviewCounts: 17,
      details: [
        { unit: 'Square Feet', value: 1200, icon: '/assets/icons/house-size-icon.svg' },
        { unit: 'Bedrooms', value: 2, icon: '/assets/icons/bedroom-icon.svg' },
        { unit: 'Bathrooms', value: 1, icon: '/assets/icons/bathroom-icon.svg' },
      ],
      facilities: [
        { name: 'car parking', icon: '/assets/icons/car-parking-icon.svg' },
        { name: 'wi-fi', icon: '/assets/icons/wifi-icon.svg' },
      ],
      gallery: [
        'https://www.marthastewart.com/thmb/BrPsyQIFYtT5p7TOssMkpUe1ZN8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/the-breakers-mansion-alt-getty-0521-2000-bc6628e8b0c94006a9e634fff61ccdd3.jpg',
        'https://www.marthastewart.com/thmb/EJJAWYhvR9tXBHue-xAqCmVsv8k=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/maimi-vizcaya-museum-getty-0521-2000-f97000c91c294e82befe6b4326e5346d.jpg',
      ],
      reviews: [
        {
          reviewerName: 'Alice Smith',
          rate: 4,
          reviewDate: '2025-01-10',
          content: 'Lovely place, great location!',
          reviewerPicture:
            'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
          likes: 10,
          dislikes: 2,
        },
        {
          reviewerName: 'Tom Harris',
          rate: 3,
          reviewDate: '2025-02-15',
          content: 'Nice but a bit small for the price.',
          reviewerPicture:
            'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
          likes: 5,
          dislikes: 3,
        },
        {
          reviewerName: 'Lisa Wong',
          rate: 5,
          reviewDate: '2025-03-20',
          content: 'Perfect cozy getaway!',
          reviewerPicture:
            'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
          likes: 8,
          dislikes: 0,
        },
      ],
    },
    {
      id: 2,
      name: 'Modern Villa',
      price: 450000,
      address: '456 Oak Ave, Rivertown',
      rating: 4.8,
      reviewCounts: 24,
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
      gallery: [
        'https://www.marthastewart.com/thmb/huwUL_luyq1VH-E9VRIwb4MtXhg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/oheka-castle-long-island-getty-0521-2000-32dbccc9f7674857b1e5b491894fc626.jpg',
        'https://www.marthastewart.com/thmb/bUXIdmX1Ztnau0dXlNUcWyr31Hw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/mark-twain-boyhood-home-getty-0521-2000-8b559f7931f441b9a3e41d946e158b67.jpg',
      ],
      reviews: [
        {
          reviewerName: 'Bob Johnson',
          rate: 5,
          reviewDate: '2025-03-15',
          content: 'Amazing amenities!',
          reviewerPicture:
            'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
          likes: 15,
          dislikes: 1,
        },
        {
          reviewerName: 'Sarah Miller',
          rate: 4,
          reviewDate: '2025-04-10',
          content: 'Great space, but pool maintenance could improve.',
          reviewerPicture:
            'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
          likes: 7,
          dislikes: 4,
        },
        {
          reviewerName: 'Mike Chen',
          rate: 5,
          reviewDate: '2025-05-05',
          content: 'Luxurious and spacious!',
          reviewerPicture:
            'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
          likes: 12,
          dislikes: 0,
        },
      ],
    },
    {
      id: 3,
      name: 'Urban Loft',
      price: 320000,
      address: '789 Pine Rd, Cityville',
      rating: 4.0,
      reviewCounts: 12,
      details: [
        { unit: 'Square Feet', value: 1500, icon: '/assets/icons/house-size-icon.svg' },
        { unit: 'Bedrooms', value: 3, icon: '/assets/icons/bedroom-icon.svg' },
        { unit: 'Bathrooms', value: 2, icon: '/assets/icons/bathroom-icon.svg' },
      ],
      facilities: [
        { name: 'wi-fi', icon: '/assets/icons/wifi-icon.svg' },
        { name: 'restaurant', icon: '/assets/icons/restaurant-icon.svg' },
      ],
      gallery: [
        'https://www.marthastewart.com/thmb/KoJk8O81yDSK-Dr1sG2QCmwXLa4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/george-washington-house-moutn-vernon-getty-0521-2000-8d7f6b9a8b114d1f833641a761b3567a.jpg',
        'https://www.marthastewart.com/thmb/KoJk8O81yDSK-Dr1sG2QCmwXLa4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/george-washington-house-moutn-vernon-getty-0521-2000-8d7f6b9a8b114d1f833641a761b3567a.jpg',
      ],
      reviews: [
        {
          reviewerName: 'Clara Brown',
          rate: 4,
          reviewDate: '2025-02-20',
          content: 'Great for city living.',
          reviewerPicture:
            'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
          likes: 9,
          dislikes: 2,
        },
        {
          reviewerName: 'John Patel',
          rate: 3,
          reviewDate: '2025-03-25',
          content: 'Good location, but noisy at night.',
          reviewerPicture:
            'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
          likes: 4,
          dislikes: 5,
        },
        {
          reviewerName: 'Emily Davis',
          rate: 4,
          reviewDate: '2025-04-15',
          content: 'Stylish and convenient.',
          reviewerPicture:
            'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
          likes: 6,
          dislikes: 1,
        },
      ],
    },
    {
      id: 4,
      name: 'Family Home',
      price: 380000,
      address: '101 Cedar Ln, Suburbia',
      rating: 4.5,
      reviewCounts: 20,
      details: [
        { unit: 'Square Feet', value: 1800, icon: '/assets/icons/house-size-icon.svg' },
        { unit: 'Bedrooms', value: 3, icon: '/assets/icons/bedroom-icon.svg' },
        { unit: 'Bathrooms', value: 2, icon: '/assets/icons/bathroom-icon.svg' },
      ],
      facilities: [
        { name: 'car parking', icon: '/assets/icons/car-parking-icon.svg' },
        { name: 'wi-fi', icon: '/assets/icons/wifi-icon.svg' },
      ],
      gallery: [
        'https://www.marthastewart.com/thmb/v9eYbGo6tOJV1OW-Tn-9w5C9BcY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fairlawn-mansion-museum-0521-2000-c88f1d746c124c9d820ed2d307167830.jpg',
        'https://www.marthastewart.com/thmb/VUBI2m7iwu3T3q8aRENbW3dMPa0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/highland-ranch-mansion-0521-49254f47fee54c158d734048166f8d74.jpg',
      ],
      reviews: [
        {
          reviewerName: 'David Lee',
          rate: 4,
          reviewDate: '2025-04-05',
          content: 'Perfect for families.',
          reviewerPicture:
            'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
          likes: 11,
          dislikes: 1,
        },
        {
          reviewerName: 'Anna Garcia',
          rate: 5,
          reviewDate: '2025-05-10',
          content: 'Wonderful home for kids!',
          reviewerPicture:
            'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
          likes: 10,
          dislikes: 0,
        },
        {
          reviewerName: 'Mark Wilson',
          rate: 4,
          reviewDate: '2025-06-01',
          content: 'Spacious but needs minor repairs.',
          reviewerPicture:
            'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
          likes: 6,
          dislikes: 3,
        },
      ],
    },
    {
      id: 5,
      name: 'Luxury Condo',
      price: 600000,
      address: '202 Birch St, Downtown',
      rating: 4.9,
      reviewCounts: 27,
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
      gallery: [
        'https://www.marthastewart.com/thmb/FUgFgKki4egodVvcxM0s5kDaE_M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bringham-hanna-mansion-0521-2000-8cd8427bc9824762a9d6a43e4ddf26bd.jpg',
        'https://www.marthastewart.com/thmb/IVWR9pa3fiFmfcZC9gPqcPs7Psg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/prospect-place-estate-0521-2000-f3107c3357d8475f94dff9a2d41ad1a1.jpeg',
      ],
      reviews: [
        {
          reviewerName: 'Emma Wilson',
          rate: 5,
          reviewDate: '2025-05-12',
          content: 'Luxury at its best!',
          reviewerPicture:
            'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
          likes: 20,
          dislikes: 0,
        },
        {
          reviewerName: 'Rachel Lee',
          rate: 4,
          reviewDate: '2025-06-15',
          content: 'High-end but pricey.',
          reviewerPicture:
            'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
          likes: 8,
          dislikes: 2,
        },
        {
          reviewerName: 'Steven Kim',
          rate: 5,
          reviewDate: '2025-07-01',
          content: 'Top-notch facilities!',
          reviewerPicture:
            'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
          likes: 15,
          dislikes: 1,
        },
      ],
    },
    {
      id: 6,
      name: 'Rustic Retreat',
      price: 200000,
      address: '303 Elm Dr, Countryside',
      rating: 4.1,
      reviewCounts: 14,
      details: [
        { unit: 'Square Feet', value: 1000, icon: '/assets/icons/house-size-icon.svg' },
        { unit: 'Bedrooms', value: 2, icon: '/assets/icons/bedroom-icon.svg' },
        { unit: 'Bathrooms', value: 1, icon: '/assets/icons/bathroom-icon.svg' },
      ],
      facilities: [{ name: 'car parking', icon: '/assets/icons/car-parking-icon.svg' }],
      gallery: [
        'https://www.marthastewart.com/thmb/lzbd7lNRfqP0360CxehtG82r-ZU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/the-biltmore-estate-getty-0321-2000-9fa47523fe6943eba55b9271d1e4aa5a.jpg',
        'https://www.marthastewart.com/thmb/RX5ODSaZxviG1BbDskupCrt_uQY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/the-breakers-mansion-getty-0521-2000-ed947c86a6a64097bf15ff8b4902d0df.jpg',
      ],
      reviews: [
        {
          reviewerName: 'Frank Davis',
          rate: 4,
          reviewDate: '2025-06-01',
          content: 'Peaceful and cozy.',
          reviewerPicture:
            'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
          likes: 7,
          dislikes: 1,
        },
        {
          reviewerName: 'Olivia Green',
          rate: 3,
          reviewDate: '2025-07-05',
          content: 'Nice but lacks amenities.',
          reviewerPicture:
            'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
          likes: 4,
          dislikes: 3,
        },
        {
          reviewerName: 'Ethan Brown',
          rate: 4,
          reviewDate: '2025-08-10',
          content: 'Great rural escape.',
          reviewerPicture:
            'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
          likes: 6,
          dislikes: 1,
        },
      ],
    },
    {
      id: 7,
      name: 'City Apartment',
      price: 280000,
      address: '404 Spruce St, Metropolis',
      rating: 3.9,
      reviewCounts: 10,
      details: [
        { unit: 'Square Feet', value: 900, icon: '/assets/icons/house-size-icon.svg' },
        { unit: 'Bedrooms', value: 1, icon: '/assets/icons/bedroom-icon.svg' },
        { unit: 'Bathrooms', value: 1, icon: '/assets/icons/bathroom-icon.svg' },
      ],
      facilities: [
        { name: 'wi-fi', icon: '/assets/icons/wifi-icon.svg' },
        { name: 'restaurant', icon: '/assets/icons/restaurant-icon.svg' },
      ],
      gallery: [
        'https://www.marthastewart.com/thmb/mpy8zE3RVRaDmgY4738Nx51l5yQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/gracleand-elvis-presley-home-getty-0521-2000-99847d1846a34d8fbbe5e5a28caf9fc9.jpg',
        'https://www.marthastewart.com/thmb/tZUQRYxo9sAyu4JFWiJ9owqdTtE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bayou-bend-collection-and-gardens-0521-c0548fee80744f1599def68e0525f086.jpg',
      ],
      reviews: [
        {
          reviewerName: 'Grace Kim',
          rate: 3,
          reviewDate: '2025-07-10',
          content: 'Good for singles.',
          reviewerPicture:
            'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
          likes: 5,
          dislikes: 3,
        },
        {
          reviewerName: 'Liam Turner',
          rate: 4,
          reviewDate: '2025-08-15',
          content: 'Convenient and modern.',
          reviewerPicture:
            'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
          likes: 6,
          dislikes: 1,
        },
        {
          reviewerName: 'Sophia Adams',
          rate: 3,
          reviewDate: '2025-09-01',
          content: 'Small but functional.',
          reviewerPicture:
            'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
          likes: 4,
          dislikes: 2,
        },
      ],
    },
    {
      id: 8,
      name: 'Suburban Bungalow',
      price: 350000,
      address: '505 Willow Ave, Greenfields',
      rating: 4.3,
      reviewCounts: 22,
      details: [
        { unit: 'Square Feet', value: 1600, icon: '/assets/icons/house-size-icon.svg' },
        { unit: 'Bedrooms', value: 3, icon: '/assets/icons/bedroom-icon.svg' },
        { unit: 'Bathrooms', value: 2, icon: '/assets/icons/bathroom-icon.svg' },
      ],
      facilities: [
        { name: 'car parking', icon: '/assets/icons/car-parking-icon.svg' },
        { name: 'wi-fi', icon: '/assets/icons/wifi-icon.svg' },
      ],
      gallery: [
        'https://wallpapers.com/images/high/real-estate-digital-illustration-crr08689u5ackzo3.webp',
        'https://wallpapers.com/images/high/luxury-bedroom-with-a-modern-design-94wycxr15bs8sw1l.webp',
      ],
      reviews: [
        {
          reviewerName: 'Henry Moore',
          rate: 4,
          reviewDate: '2025-08-15',
          content: 'Spacious and modern.',
          reviewerPicture:
            'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
          likes: 9,
          dislikes: 1,
        },
        {
          reviewerName: 'Mia Carter',
          rate: 5,
          reviewDate: '2025-09-05',
          content: 'Love the open layout!',
          reviewerPicture:
            'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
          likes: 10,
          dislikes: 0,
        },
        {
          reviewerName: 'Noah White',
          rate: 4,
          reviewDate: '2025-09-15',
          content: 'Great home, but yard is small.',
          reviewerPicture:
            'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
          likes: 7,
          dislikes: 2,
        },
      ],
    },
    {
      id: 9,
      name: 'Penthouse Suite',
      price: 750000,
      address: '606 Chestnut Blvd, Uptown',
      rating: 4.7,
      reviewCounts: 32,
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
      gallery: [
        'https://wallpapers.com/images/high/mansion-view-inn-and-suites-ns5bc2myxka38avi.webp',
        'https://wallpapers.com/images/high/shifa-manor-hotel-mansion-733yk9twcwr1mjqh.webp',
      ],
      reviews: [
        {
          reviewerName: 'Isabella Clark',
          rate: 5,
          reviewDate: '2025-09-01',
          content: 'Stunning views!',
          reviewerPicture:
            'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
          likes: 18,
          dislikes: 0,
        },
        {
          reviewerName: 'Lucas Evans',
          rate: 4,
          reviewDate: '2025-09-10',
          content: 'Amazing but expensive maintenance.',
          reviewerPicture:
            'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
          likes: 6,
          dislikes: 3,
        },
        {
          reviewerName: 'Ava Martinez',
          rate: 5,
          reviewDate: '2025-09-20',
          content: 'Best penthouse ever!',
          reviewerPicture:
            'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
          likes: 14,
          dislikes: 1,
        },
      ],
    },
    {
      id: 10,
      name: 'Country Estate',
      price: 500000,
      address: '707 Laurel Rd, Ruralville',
      rating: 4.4,
      reviewCounts: 18,
      details: [
        { unit: 'Square Feet', value: 3000, icon: '/assets/icons/house-size-icon.svg' },
        { unit: 'Bedrooms', value: 4, icon: '/assets/icons/bedroom-icon.svg' },
        { unit: 'Bathrooms', value: 3, icon: '/assets/icons/bathroom-icon.svg' },
      ],
      facilities: [
        { name: 'car parking', icon: '/assets/icons/car-parking-icon.svg' },
        { name: 'swimming', icon: '/assets/icons/swimming-icon.svg' },
      ],
      gallery: [
        'https://wallpapers.com/images/high/graceland-estate-front-view-rthnlcxfmw1mj54e.webp',
        'https://wallpapers.com/images/high/graceland-estate-6c80tipcg9jyezai.webp',
      ],
      reviews: [
        {
          reviewerName: 'James Taylor',
          rate: 4,
          reviewDate: '2025-09-10',
          content: 'Great for nature lovers.',
          reviewerPicture:
            'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
          likes: 8,
          dislikes: 1,
        },
        {
          reviewerName: 'Ella Scott',
          rate: 5,
          reviewDate: '2025-09-15',
          content: 'Beautiful estate, very serene.',
          reviewerPicture:
            'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
          likes: 10,
          dislikes: 0,
        },
        {
          reviewerName: 'Jack Lewis',
          rate: 4,
          reviewDate: '2025-09-20',
          content: 'Spacious but far from city.',
          reviewerPicture:
            'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
          likes: 6,
          dislikes: 2,
        },
      ],
    },
  ])

  const bookmarkedHouses = computed(() => {
    return houses.filter((h) => h.isBookmarked)
  })
  const bookedHouses = computed(() => {
    return houses.filter((h) => {
      return userBookedHouseIds.value.includes(h.id)
    })
  })

  const bookedEstates = ref([])
  const userBookedHouseIds = ref([])

  const authStore = useAuthStore()

  async function loadbookedEstates() {
    await authStore.getUser()
    if (!authStore.user) return false
    let { data: allBooked } = await supabase.from('bookedEstates').select('estate_id')
    bookedEstates.value = allBooked.map((e) => e.estate_id)

    let { data: userBooked } = await supabase
      .from('bookedEstates')
      .select('estate_id')
      .eq('user_id', authStore.user.id)
    userBookedHouseIds.value = [...new Set([...userBooked.map((e) => e.estate_id)])]
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

  return {
    houses,
    bookedEstates,
    bookmarkedHouses,
    bookedHouses,
    userBookedHouseIds,
    loadbookedEstates,
    toggleBookedEstate,
    findHouseById,
  }
})
