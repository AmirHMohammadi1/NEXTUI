// app/demo/page.tsx
'use client';

import React, { useState } from 'react';
import { useTheme } from '@/components/theme-provider';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';
import {
  Button,
  Input,
  Textarea,
  Select,
  Checkbox,
  RadioGroup,
  Switch,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  Alert,
  Modal,
  Tooltip,
  Loader,
  Badge,
  Avatar,
  Tabs,
  Accordion,
  Pagination,
  Breadcrumb,
  Progress,
  Skeleton,
  DatePicker,
  Slider,
  Rating,
  Upload,
  Timeline,
  Carousel,
  Masonry,
  ChatBubble,
  Countdown,
  ScrollIndicator,
  Typewriter,
  Weather,
  Confetti,
  TableAdvanced,
  Chart,
  Calendar,
  AudioPlayer,
  VideoPlayer,
  ImageGallery,
  Details,
  Meter,
  Output,
  DataList,
  DataListOption,
  Dialog,
  Figure,
  Iframe,
  Portal,
  Legend,
  Kbd,
  Mark,
  Time,
  Navbar,
  Footer,
  Hero,
  FeatureCard,
  Testimonial,
  PricingCard,
  Newsletter,
  TeamMember,
  Stats,
  LogoCloud,
  FAQ,
  StepIndicator,
  Divider,
  GradientText,
  BackToTop,
  Sidebar,
  PageHeader,
  Section,
  Container,
  Grid,
  Flex
} from '@/components/ui';

const DemoPage = () => {
  const { theme, setThemeColor, isDark, toggleDarkMode } = useTheme();
  const { toast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [activeTab, setActiveTab] = useState('buttons');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [sliderValue, setSliderValue] = useState(50);
  const [rating, setRating] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  const tableData = [
    { id: 1, name: 'محمد رضایی', age: 28, email: 'mohammad@example.com', status: 'فعال' },
    { id: 2, name: 'فاطمه محمدی', age: 32, email: 'fatemeh@example.com', status: 'غیرفعال' },
    { id: 3, name: 'علی حسینی', age: 45, email: 'ali@example.com', status: 'فعال' },
  ];

  const tableColumns = [
    { key: 'id', header: 'ID', sortable: true },
    { key: 'name', header: 'نام', sortable: true },
    { key: 'age', header: 'سن', sortable: true },
    { key: 'email', header: 'ایمیل', sortable: false },
    { key: 'status', header: 'وضعیت', sortable: true, render: (value: string) => (
      <Badge variant={value === 'فعال' ? 'success' : 'error'}>{value}</Badge>
    )},
  ];

  const chartData = {
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
    datasets: [
      {
        label: 'فروش ماهانه',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'var(--color-primary)',
      },
    ],
  };

  const timelineItems = [
    {
      title: 'تاسیس شرکت',
      description: 'شرکت ما با هدف ارائه بهترین خدمات تاسیس شد.',
      date: '1400/01/01',
      color: 'primary'
    },
    {
      title: 'اولین محصول',
      description: 'اولین محصول خود را با موفقیت به بازار عرضه کردیم.',
      date: '1400/06/15',
      color: 'success'
    },
    {
      title: 'گسترش تیم',
      description: 'تیم خود را به 20 نفر توسعه دادیم.',
      date: '1401/03/22',
      color: 'warning'
    }
  ];

  const accordionItems = [
    {
      id: '1',
      title: 'چگونه می‌توانم از کتابخانه استفاده کنم؟',
      content: 'کافیست کامپوننت‌ها را import کرده و از آن‌ها در پروژه خود استفاده کنید.'
    },
    {
      id: '2',
      title: 'آیا این کتابخانه رایگان است؟',
      content: 'بله، این کتابخانه کاملاً رایگان و متن باز است.'
    },
    {
      id: '3',
      title: 'از چه تکنولوژی‌هایی استفاده شده است؟',
      content: 'از Next.js 15، TypeScript و Tailwind CSS استفاده شده است.'
    }
  ];

  const breadcrumbItems = [
    { label: 'خانه', href: '/' },
    { label: 'دمو', href: '/demo' },
    { label: 'کامپوننت‌ها', href: '/demo#components' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar
        logo={<div className="text-xl font-bold text-primary">NexUI</div>}
        menuItems={[
          { label: 'خانه', href: '/' },
          { label: 'مستندات', href: '/docs' },
          { label: 'دمو', href: '/demo' },
          { label: 'گیت‌هاب', href: 'https://github.com' }
        ]}
        cta={<Button variant="primary">شروع کنید</Button>}
      />

      <Hero
        title="کتابخانه کامپوننت‌های NexUI"
        subtitle="مجموعه کاملی از کامپوننت‌های React با طراحی مدرن و قابلیت شخصی‌سازی بالا"
        cta={<Button size="lg" variant="primary" onClick={() => setShowConfetti(true)}>شروع کنید</Button>}
        secondaryCta={<Button size="lg" variant="outline">مستندات</Button>}
      />

      <Container>
        <PageHeader
          title="نمایش کامپوننت‌ها"
          description="در این صفحه می‌توانید تمام کامپوننت‌های موجود در کتابخانه NexUI را مشاهده و تست کنید."
        />

        <Tabs
          tabs={[
            {
              id: 'buttons',
              label: 'دکمه‌ها و فرم‌ها',
              content: (
                <Section title="دکمه‌ها و فرم‌ها">
                  <Grid cols={1} md={2} gap={6}>
                    <Card>
                      <CardHeader>
                        <CardTitle>انواع دکمه‌ها</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          <Button variant="primary">Primary</Button>
                          <Button variant="secondary">Secondary</Button>
                          <Button variant="outline">Outline</Button>
                          <Button variant="ghost">Ghost</Button>
                          <Button variant="danger">Danger</Button>
                          <Button variant="success">Success</Button>
                          <Button variant="warning">Warning</Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Button size="sm">Small</Button>
                          <Button size="md">Medium</Button>
                          <Button size="lg">Large</Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Button isLoading>Loading</Button>
                          <Button disabled>Disabled</Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>فرم‌ها</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Input label="نام کاربری" placeholder="نام خود را وارد کنید" />
                        <Textarea label="توضیحات" placeholder="توضیحات خود را وارد کنید" />
                        <Select
                          label="گزینه‌ها"
                          options={[
                            { value: 'option1', label: 'گزینه اول' },
                            { value: 'option2', label: 'گزینه دوم' },
                            { value: 'option3', label: 'گزینه سوم' }
                          ]}
                        />
                        <Checkbox label="موافقت با شرایط" />
                        <RadioGroup
                          label="جنسیت"
                          name="gender"
                          options={[
                            { value: 'male', label: 'مرد' },
                            { value: 'female', label: 'زن' }
                          ]}
                        />
                        <Switch checked={isDark} onChange={toggleDarkMode} label="حالت تاریک" />
                      </CardContent>
                    </Card>
                  </Grid>
                </Section>
              )
            },
            {
              id: 'display',
              label: 'نمایش اطلاعات',
              content: (
                <Section title="کامپوننت‌های نمایشی">
                  <Grid cols={1} md={2} gap={6}>
                    <Card>
                      <CardHeader>
                        <CardTitle>کارت‌ها و هشدارها</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Alert variant="info">این یک هشدار اطلاعاتی است</Alert>
                        <Alert variant="success">عملیات با موفقیت انجام شد</Alert>
                        <Alert variant="warning">هشدار: این عمل قابل بازگشت نیست</Alert>
                        <Alert variant="error">خطا در انجام عملیات</Alert>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>بارگذاری و وضعیت</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Loader size="lg" />
                        <div className="flex gap-2">
                          <Badge variant="primary">Primary</Badge>
                          <Badge variant="secondary">Secondary</Badge>
                          <Badge variant="success">Success</Badge>
                          <Badge variant="warning">Warning</Badge>
                          <Badge variant="error">Error</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Avatar src="/avatar.jpg" alt="User" />
                          <Avatar name="John Doe" />
                          <Avatar fallback="JD" />
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                </Section>
              )
            },
            {
              id: 'navigation',
              label: 'ناوبری',
              content: (
                <Section title="کامپوننت‌های ناوبری">
                  <Grid cols={1} gap={6}>
                    <Card>
                      <CardHeader>
                        <CardTitle>تب‌ها و accordion</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Tabs
                          tabs={[
                            { id: 'tab1', label: 'تب اول', content: 'محتوای تب اول' },
                            { id: 'tab2', label: 'تب دوم', content: 'محتوای تب دوم' },
                            { id: 'tab3', label: 'تب سوم', content: 'محتوای تب سوم' }
                          ]}
                        />
                        <Accordion items={accordionItems} />
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>صفحه‌بندی و مسیر</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Breadcrumb items={breadcrumbItems} />
                        <Pagination
                          currentPage={currentPage}
                          totalPages={10}
                          onPageChange={setCurrentPage}
                        />
                      </CardContent>
                    </Card>
                  </Grid>
                </Section>
              )
            },
            {
              id: 'data',
              label: 'داده و نمودار',
              content: (
                <Section title="کامپوننت‌های داده">
                  <Grid cols={1} gap={6}>
                    <Card>
                      <CardHeader>
                        <CardTitle>جدول پیشرفته</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <TableAdvanced
                          columns={tableColumns}
                          data={tableData}
                          pagination
                          pageSize={5}
                          selectable
                        />
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>نمودارها</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Chart type="bar" data={chartData} />
                      </CardContent>
                    </Card>
                  </Grid>
                </Section>
              )
            },
            {
              id: 'advanced',
              label: 'کامپوننت‌های پیشرفته',
              content: (
                <Section title="کامپوننت‌های پیشرفته">
                  <Grid cols={1} md={2} gap={6}>
                    <Card>
                      <CardHeader>
                        <CardTitle>انتخابگرها</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <DatePicker
                          value={selectedDate}
                          onChange={setSelectedDate}
                          label="تاریخ را انتخاب کنید"
                        />
                        <Slider
                          min={0}
                          max={100}
                          value={sliderValue}
                          onChange={setSliderValue}
                          label="مقدار را انتخاب کنید"
                          showValue
                        />
                        <Rating value={rating} onChange={setRating} />
                        <Upload
                          onFileSelect={(files) => console.log(files)}
                          multiple
                          maxSize={5}
                          accept="image/*,.pdf"
                        />
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>چندرسانه‌ای</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <AudioPlayer
                          src="/audio/sample.mp3"
                          title="نمونه صوت"
                          artist="هنرمند ناشناس"
                        />
                        <ImageGallery
                          images={[
                            'https://via.placeholder.com/600x400/3B82F6/FFFFFF',
                            'https://via.placeholder.com/600x400/EF4444/FFFFFF',
                            'https://via.placeholder.com/600x400/10B981/FFFFFF'
                          ]}
                          showThumbnails
                        />
                      </CardContent>
                    </Card>
                  </Grid>

                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>سایر کامپوننت‌ها</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Timeline items={timelineItems} />
                      <Countdown
                        targetDate={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)}
                        showLabels
                      />
                      <Typewriter
                        text={['به NexUI خوش آمدید', 'کتابخانه کامپوننت‌های React', 'با طراحی مدرن و زیبا']}
                        loop
                      />
                    </CardContent>
                  </Card>
                </Section>
              )
            }
          ]}
        />

        <Section title="ویژگی‌های کلیدی" className="mt-16">
          <Grid cols={1} md={3} gap={6}>
            <FeatureCard
              icon="🎨"
              title="طراحی مدرن"
              description="کامپوننت‌هایی با طراحی زیبا و مدرن که تجربه کاربری عالی ارائه می‌دهند"
            />
            <FeatureCard
              icon="📱"
              title="ریسپانسیو"
              description="کاملاً سازگار با تمام دستگاه‌ها از موبایل تا دسکتاپ"
            />
            <FeatureCard
              icon="🎯"
              title="قابل شخصی‌سازی"
              description="امکان تغییر تم و شخصی‌سازی کامل کامپوننت‌ها"
            />
          </Grid>
        </Section>

        <Section title="نظرات کاربران" className="mt-16">
          <Grid cols={1} md={2} gap={6}>
            <Testimonial
              quote="NexUI زندگی من را به عنوان توسعه‌دهنده بسیار آسان‌تر کرده است. کامپوننت‌های زیبا و کاربردی!"
              author="محمد رضایی"
              role="توسعه‌دهنده فرانت‌اند"
              avatar="/avatar1.jpg"
            />
            <Testimonial
              quote="کتابخانه کاملی است که تقریباً هر نیازی را پوشش می‌دهد. بسیار قابل اعتماد و حرفه‌ای."
              author="فاطمه محمدی"
              role="مدیر محصول"
              avatar="/avatar2.jpg"
            />
          </Grid>
        </Section>

        <Section title="سوالات متداول" className="mt-16">
          <FAQ
            items={[
              {
                question: 'چگونه می‌توانم از کتابخانه استفاده کنم؟',
                answer: 'کافیست با استفاده از npm یا yarn کتابخانه را نصب کرده و کامپوننت‌ها را import کنید.'
              },
              {
                question: 'آیا می‌توانم تم را شخصی‌سازی کنم؟',
                answer: 'بله، شما می‌توانید از ThemeProvider برای تغییر کامل تم استفاده کنید.'
              },
              {
                question: 'آیا این کتابخانه از TypeScript پشتیبانی می‌کند؟',
                answer: 'بله، تمام کامپوننت‌ها با TypeScript نوشته شده‌اند و انواع کاملی دارند.'
              }
            ]}
          />
        </Section>

        <Newsletter
          title="در خبرنامه ما عضو شوید"
          description="برای دریافت آخرین بروزرسانی‌ها و جدیدترین کامپوننت‌ها ایمیل خود را وارد کنید."
          placeholder="ایمیل شما"
          buttonText="عضویت"
          onSubmit={(email) => toast({ title: 'عضویت موفق', description: `ایمیل ${email} با موفقیت ثبت شد` })}
          className="mt-16"
        />
      </Container>

      <Footer
        logo={<div className="text-xl font-bold text-primary">NexUI</div>}
        description="کتابخانه کامپوننت‌های React با طراحی مدرن و قابلیت شخصی‌سازی بالا"
        links={[
          { title: 'لینک‌های مفید', links: [{ label: 'خانه', href: '/' }, { label: 'مستندات', href: '/docs' }, { label: 'دمو', href: '/demo' }] },
          { title: 'community', links: [{ label: 'گیت‌هاب', href: 'https://github.com' }, { label: 'توییتر', href: 'https://twitter.com' }, { label: 'دیسکورد', href: 'https://discord.com' }] }
        ]}
        copyright="© 2023 NexUI. تمام حقوق محفوظ است."
      />

      <BackToTop />

      {/* کامپوننت‌های overlay */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="مودال نمونه"
      >
        <p>این یک مودال نمونه است که می‌توانید برای نمایش اطلاعات استفاده کنید.</p>
        <div className="mt-4 flex justify-end">
          <Button variant="primary" onClick={() => setIsModalOpen(false)}>
            بستن
          </Button>
        </div>
      </Modal>

      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <h3 className="text-lg font-semibold mb-4">دیالوگ نمونه</h3>
        <p>این یک دیالوگ نمونه است که با استفاده از المان dialog ساخته شده.</p>
        <div className="mt-4 flex justify-end">
          <Button variant="primary" onClick={() => setIsDialogOpen(false)}>
            تایید
          </Button>
        </div>
      </Dialog>

      <Confetti active={showConfetti} onComplete={() => setShowConfetti(false)} />

      <Toaster />
    </div>
  );
};

export default DemoPage;