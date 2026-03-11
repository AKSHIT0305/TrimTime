// prisma/seed.ts
// ============================================================
// TrimTime Database Seed
//
// Populates:
//   - Subscription plans
//   - 1 admin user
//   - 1 demo salon (Raj Barbers) with owner
//   - Opening hours (Mon–Sat)
//   - 4 services
//   - 2 barbers with service mappings
//   - 3 sample bookings + 2 queue entries
//
// Run: npx prisma db seed
// ============================================================

import { PrismaClient, BookingStatus, BookingType, DayOfWeek } from '../src/generated/prisma/index.js';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱  Starting database seed...\n');

  // ------------------------------------------------------------------
  // 1. SUBSCRIPTION PLANS
  // ------------------------------------------------------------------
  console.log('📦  Seeding subscription plans...');

  const freePlan = await prisma.subscriptionPlan.upsert({
    where: { name: 'free' },
    update: {},
    create: {
      name: 'free',
      priceMonthly: null,
      maxBarbers: 3,
      maxBookings: 50,
      features: ['live_queue', 'qr_code', 'basic_analytics'],
    },
  });

  const proPlan = await prisma.subscriptionPlan.upsert({
    where: { name: 'pro' },
    update: {},
    create: {
      name: 'pro',
      priceMonthly: 29.99,
      maxBarbers: 15,
      maxBookings: null,
      features: [
        'live_queue',
        'qr_code',
        'advanced_analytics',
        'sms_reminders',
        'custom_branding',
        'priority_support',
      ],
    },
  });

  await prisma.subscriptionPlan.upsert({
    where: { name: 'enterprise' },
    update: {},
    create: {
      name: 'enterprise',
      priceMonthly: 99.99,
      maxBarbers: null,
      maxBookings: null,
      features: [
        'live_queue',
        'qr_code',
        'advanced_analytics',
        'sms_reminders',
        'custom_branding',
        'priority_support',
        'multi_location',
        'api_access',
        'white_label',
        'dedicated_account_manager',
      ],
    },
  });

  console.log('   ✓ 3 subscription plans created');

  // ------------------------------------------------------------------
  // 2. USERS
  // ------------------------------------------------------------------
  console.log('\n👤  Seeding users...');

  const adminUser = await prisma.user.upsert({
    where: { phone: '+10000000000' },
    update: {},
    create: {
      phone: '+10000000000',
      name: 'TrimTime Admin',
      role: 'admin',
    },
  });

  const salonOwner = await prisma.user.upsert({
    where: { phone: '+15551234567' },
    update: {},
    create: {
      phone: '+15551234567',
      name: 'Raj Kapoor',
      role: 'salon_owner',
    },
  });

  const staffUser = await prisma.user.upsert({
    where: { phone: '+15559876543' },
    update: {},
    create: {
      phone: '+15559876543',
      name: 'Aman Sharma',
      role: 'staff',
    },
  });

  const customer1 = await prisma.user.upsert({
    where: { phone: '+15550001111' },
    update: {},
    create: {
      phone: '+15550001111',
      name: 'David Miller',
      role: 'customer',
    },
  });

  const customer2 = await prisma.user.upsert({
    where: { phone: '+15550002222' },
    update: {},
    create: {
      phone: '+15550002222',
      name: 'Sarah Richardson',
      role: 'customer',
    },
  });

  console.log('   ✓ 5 users created (1 admin, 1 owner, 1 staff, 2 customers)');

  // ------------------------------------------------------------------
  // 3. SALON
  // ------------------------------------------------------------------
  console.log('\n🏪  Seeding salon...');

  const salon = await prisma.salon.upsert({
    where: { slug: 'raj-barbers' },
    update: {},
    create: {
      ownerId: salonOwner.id,
      planId: proPlan.id,
      slug: 'raj-barbers',
      name: 'Raj Barbers',
      phone: '+15551234567',
      address: '456 Stylist Ave, Suite 200, Brooklyn, NY 11201',
      mapsUrl: 'https://goo.gl/maps/example',
      latitude: 40.6782,
      longitude: -73.9442,
      status: 'active',
      subscription: 'pro',
    },
  });

  console.log(`   ✓ Salon created — slug: "${salon.slug}", id: ${salon.id}`);

  // ------------------------------------------------------------------
  // 4. OPENING HOURS  (Mon–Sat open, Sunday closed)
  // ------------------------------------------------------------------
  console.log('\n🕐  Seeding opening hours...');

  const hoursData: Array<{
    salonId: string;
    dayOfWeek: DayOfWeek;
    openTime: string | null;
    closeTime: string | null;
    isOpen: boolean;
  }> = [
    { salonId: salon.id, dayOfWeek: DayOfWeek.MONDAY,    openTime: '09:00:00', closeTime: '20:00:00', isOpen: true  },
    { salonId: salon.id, dayOfWeek: DayOfWeek.TUESDAY,   openTime: '09:00:00', closeTime: '20:00:00', isOpen: true  },
    { salonId: salon.id, dayOfWeek: DayOfWeek.WEDNESDAY, openTime: '09:00:00', closeTime: '20:00:00', isOpen: true  },
    { salonId: salon.id, dayOfWeek: DayOfWeek.THURSDAY,  openTime: '09:00:00', closeTime: '20:00:00', isOpen: true  },
    { salonId: salon.id, dayOfWeek: DayOfWeek.FRIDAY,    openTime: '09:00:00', closeTime: '20:00:00', isOpen: true  },
    { salonId: salon.id, dayOfWeek: DayOfWeek.SATURDAY,  openTime: '10:00:00', closeTime: '18:00:00', isOpen: true  },
    { salonId: salon.id, dayOfWeek: DayOfWeek.SUNDAY,    openTime: null,       closeTime: null,       isOpen: false },
  ];

  for (const hours of hoursData) {
    await prisma.openingHours.upsert({
      where: { salonId_dayOfWeek: { salonId: salon.id, dayOfWeek: hours.dayOfWeek } },
      update: {},
      create: hours,
    });
  }

  console.log('   ✓ 7 opening hour records (Mon–Sat open, Sunday closed)');

  // ------------------------------------------------------------------
  // 5. SERVICES
  // ------------------------------------------------------------------
  console.log('\n✂️   Seeding services...');

  const classicHaircut = await prisma.service.upsert({
    where: { id: '00000000-0000-0000-0001-000000000001' },
    update: {},
    create: {
      id: '00000000-0000-0000-0001-000000000001',
      salonId: salon.id,
      name: 'Classic Haircut',
      description: 'Traditional cut with clippers and scissors, styled to finish.',
      price: 30.00,
      durationMins: 30,
      icon: 'content_cut',
      isActive: true,
      sortOrder: 1,
    },
  });

  const beardTrim = await prisma.service.upsert({
    where: { id: '00000000-0000-0000-0001-000000000002' },
    update: {},
    create: {
      id: '00000000-0000-0000-0001-000000000002',
      salonId: salon.id,
      name: 'Beard Trim & Lineup',
      description: 'Precision beard trim, shape, and edge lineup.',
      price: 20.00,
      durationMins: 15,
      icon: 'face',
      isActive: true,
      sortOrder: 2,
    },
  });

  const royalTreatment = await prisma.service.upsert({
    where: { id: '00000000-0000-0000-0001-000000000003' },
    update: {},
    create: {
      id: '00000000-0000-0000-0001-000000000003',
      salonId: salon.id,
      name: 'The Royal Treatment',
      description: 'Full service: haircut + beard + hot towel shave + styling.',
      price: 55.00,
      durationMins: 60,
      icon: 'crown',
      isActive: true,
      sortOrder: 3,
    },
  });

  const kidsCut = await prisma.service.upsert({
    where: { id: '00000000-0000-0000-0001-000000000004' },
    update: {},
    create: {
      id: '00000000-0000-0000-0001-000000000004',
      salonId: salon.id,
      name: "Kid's Cut",
      description: 'Gentle cut for children under 12.',
      price: 25.00,
      durationMins: 25,
      icon: 'child_care',
      isActive: true,
      sortOrder: 4,
    },
  });

  console.log('   ✓ 4 services created');

  // ------------------------------------------------------------------
  // 6. BARBERS
  // ------------------------------------------------------------------
  console.log('\n💈  Seeding barbers...');

  const barberAman = await prisma.barber.upsert({
    where: { id: '00000000-0000-0000-0002-000000000001' },
    update: {},
    create: {
      id: '00000000-0000-0000-0002-000000000001',
      salonId: salon.id,
      userId: staffUser.id,
      name: 'Aman Sharma',
      title: 'Senior Stylist',
      rating: 4.9,
      isActive: true,
      isOnline: true,
    },
  });

  const barberRahul = await prisma.barber.upsert({
    where: { id: '00000000-0000-0000-0002-000000000002' },
    update: {},
    create: {
      id: '00000000-0000-0000-0002-000000000002',
      salonId: salon.id,
      name: 'Rahul V.',
      title: 'Master Barber',
      rating: 4.8,
      isActive: true,
      isOnline: false,
    },
  });

  console.log('   ✓ 2 barbers created');

  // ------------------------------------------------------------------
  // 7. BARBER ↔ SERVICE MAPPINGS
  // ------------------------------------------------------------------
  console.log('\n🔗  Seeding barber service mappings...');

  // Aman: Haircut, Beard Trim, Royal Treatment, Kid's Cut
  for (const serviceId of [
    classicHaircut.id,
    beardTrim.id,
    royalTreatment.id,
    kidsCut.id,
  ]) {
    await prisma.barberService.upsert({
      where: { barberId_serviceId: { barberId: barberAman.id, serviceId } },
      update: {},
      create: { barberId: barberAman.id, serviceId },
    });
  }

  // Rahul: Haircut, Royal Treatment
  for (const serviceId of [classicHaircut.id, royalTreatment.id]) {
    await prisma.barberService.upsert({
      where: { barberId_serviceId: { barberId: barberRahul.id, serviceId } },
      update: {},
      create: { barberId: barberRahul.id, serviceId },
    });
  }

  console.log('   ✓ 6 barber-service mappings created');

  // ------------------------------------------------------------------
  // 8. BOOKINGS
  // ------------------------------------------------------------------
  console.log('\n📅  Seeding sample bookings...');

  const today = new Date();
  today.setHours(10, 30, 0, 0);

  const booking1 = await prisma.booking.upsert({
    where: { id: '00000000-0000-0000-0003-000000000001' },
    update: {},
    create: {
      id: '00000000-0000-0000-0003-000000000001',
      salonId: salon.id,
      customerId: customer1.id,
      barberId: barberAman.id,
      serviceId: classicHaircut.id,
      customerName: 'David Miller',
      customerPhone: '+15550001111',
      serviceName: 'Classic Haircut',
      servicePrice: 30.00,
      appointmentAt: today,
      durationMins: 30,
      price: 30.00,
      status: BookingStatus.confirmed,
      type: BookingType.appointment,
    },
  });

  const booking2At = new Date(today);
  booking2At.setMinutes(today.getMinutes() + 45);

  const booking2 = await prisma.booking.upsert({
    where: { id: '00000000-0000-0000-0003-000000000002' },
    update: {},
    create: {
      id: '00000000-0000-0000-0003-000000000002',
      salonId: salon.id,
      customerId: customer2.id,
      barberId: barberAman.id,
      serviceId: beardTrim.id,
      customerName: 'Sarah Richardson',
      customerPhone: '+15550002222',
      serviceName: 'Beard Trim & Lineup',
      servicePrice: 20.00,
      appointmentAt: booking2At,
      durationMins: 15,
      price: 20.00,
      status: BookingStatus.pending,
      type: BookingType.appointment,
    },
  });

  // Walk-in booking for queue demo
  const walkinAt = new Date();
  walkinAt.setHours(walkinAt.getHours());

  const booking3 = await prisma.booking.upsert({
    where: { id: '00000000-0000-0000-0003-000000000003' },
    update: {},
    create: {
      id: '00000000-0000-0000-0003-000000000003',
      salonId: salon.id,
      barberId: barberAman.id,
      serviceId: royalTreatment.id,
      customerName: 'Arjun Mehra',
      customerPhone: '+15550003333',
      serviceName: 'The Royal Treatment',
      servicePrice: 55.00,
      appointmentAt: walkinAt,
      durationMins: 60,
      price: 55.00,
      status: BookingStatus.confirmed,
      type: BookingType.walk_in,
    },
  });

  console.log('   ✓ 3 bookings created (2 appointments, 1 walk-in)');

  // ------------------------------------------------------------------
  // 9. QUEUE ENTRIES
  // ------------------------------------------------------------------
  console.log('\n🔢  Seeding queue entries...');

  await prisma.queueEntry.upsert({
    where: { bookingId: booking2.id },
    update: {},
    create: {
      salonId: salon.id,
      bookingId: booking2.id,
      position: 1,
      estimatedWait: 15,
      checkedIn: false,
    },
  });

  await prisma.queueEntry.upsert({
    where: { bookingId: booking3.id },
    update: {},
    create: {
      salonId: salon.id,
      bookingId: booking3.id,
      position: 2,
      estimatedWait: 30,
      checkedIn: false,
    },
  });

  console.log('   ✓ 2 queue entries created');

  // ------------------------------------------------------------------
  // Summary
  // ------------------------------------------------------------------
  console.log('\n' + '═'.repeat(50));
  console.log('✅  Seed completed successfully!\n');
  console.log('   Demo credentials:');
  console.log('   Admin    → phone: +10000000000');
  console.log('   Owner    → phone: +15551234567');
  console.log('   Staff    → phone: +15559876543');
  console.log('   Customer → phone: +15550001111');
  console.log('\n   Demo salon slug: raj-barbers');
  console.log('   Public URL: /s/raj-barbers');
  console.log('═'.repeat(50) + '\n');
}

// ---------------------------------------------------------------------------
// Run seed + handle errors
// ---------------------------------------------------------------------------
main()
  .catch((error) => {
    console.error('❌  Seed failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
