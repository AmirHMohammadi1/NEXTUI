// app/demo/page.tsx
'use client';

import React, { useState } from 'react';
import { useTheme } from '@/components/theme-provider';
import { useToast } from '@/hooks/use-toast';
import { CodeBlock } from '@/components/ui/code-block';
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
import { Toaster } from '@/components/ui/toaster';

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
  const [showCodeSections, setShowCodeSections] = useState<Record<string, boolean>>({});

  const toggleCode = (section: string) => {
    setShowCodeSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

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

  // کدهای نمونه برای کامپوننت‌ها
  const buttonCode = `
import { Button } from '@/components/ui/button';

<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button isLoading>Loading</Button>
<Button disabled>Disabled</Button>
  `.trim();

  const inputCode = `
import { Input, Textarea, Select, Checkbox, RadioGroup, Switch } from '@/components/ui';

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
  `.trim();

  const cardCode = `
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';

<Card>
  <CardHeader>
    <CardTitle>عنوان کارت</CardTitle>
  </CardHeader>
  <CardContent>
    <p>محتوای کارت در این بخش قرار می گیرد.</p>
  </CardContent>
  <CardFooter>
    <Button variant="primary">دکمه اقدام</Button>
  </CardFooter>
</Card>
  `.trim();

  const alertCode = `
import { Alert } from '@/components/ui/alert';

<Alert variant="info">این یک هشدار اطلاعاتی است</Alert>
<Alert variant="success">عملیات با موفقیت انجام شد</Alert>
<Alert variant="warning">هشدار: این عمل قابل بازگشت نیست</Alert>
<Alert variant="error">خطا در انجام عملیات</Alert>
  `.trim();

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
                  {/* دکمه‌ها */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold">دکمه‌ها</h3>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleCode('buttons')}
                      >
                        {showCodeSections.buttons ? 'پیش‌نمایش' : 'نمایش کد'}
                      </Button>
                    </div>
                    
                    {showCodeSections.buttons ? (
                      <CodeBlock code={buttonCode} language="jsx" />
                    ) : (
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
                    )}
                  </div>

                  {/* کارت‌ها */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold">کارت‌ها</h3>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleCode('cards')}
                      >
                        {showCodeSections.cards ? 'پیش‌نمایش' : 'نمایش کد'}
                      </Button>
                    </div>
                    
                    {showCodeSections.cards ? (
                      <CodeBlock code={cardCode} language="jsx" />
                    ) : (
                      <Grid cols={1} md={2} gap={6}>
                        <Card>
                          <CardHeader>
                            <CardTitle>کارت نمونه</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p>این یک کارت نمونه است که می‌توانید برای نمایش اطلاعات استفاده کنید.</p>
                          </CardContent>
                          <CardFooter>
                            <Button variant="primary">دکمه اقدام</Button>
                          </CardFooter>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle>کارت با هشدار</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <Alert variant="info">این یک هشدار اطلاعاتی است</Alert>
                            <p>محتوای اضافی در این بخش قرار می گیرد.</p>
                          </CardContent>
                        </Card>
                      </Grid>
                    )}
                  </div>

                  {/* هشدارها */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold">هشدارها</h3>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleCode('alerts')}
                      >
                        {showCodeSections.alerts ? 'پیش‌نمایش' : 'نمایش کد'}
                      </Button>
                    </div>
                    
                    {showCodeSections.alerts ? (
                      <CodeBlock code={alertCode} language="jsx" />
                    ) : (
                      <Grid cols={1} md={2} gap={6}>
                        <Alert variant="info">این یک هشدار اطلاعاتی است</Alert>
                        <Alert variant="success">عملیات با موفقیت انجام شد</Alert>
                        <Alert variant="warning">هشدار: این عمل قابل بازگشت نیست</Alert>
                        <Alert variant="error">خطا در انجام عملیات</Alert>
                      </Grid>
                    )}
                  </div>
                </Section>
              )
            },
            {
              id: 'navigation',
              label: 'ناوبری',
              content: (
                <Section title="کامپوننت‌های ناوبری">
                  {/* تب‌ها */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold">تب‌ها</h3>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleCode('tabs')}
                      >
                        {showCodeSections.tabs ? 'پیش‌نمایش' : 'نمایش کد'}
                      </Button>
                    </div>
                    
                    {showCodeSections.tabs ? (
                      <CodeBlock code={tabsCode} language="jsx" />
                    ) : (
                      <Card>
                        <CardContent className="pt-6">
                          <Tabs
                            tabs={[
                              { id: 'tab1', label: 'تب اول', content: 'محتوای تب اول' },
                              { id: 'tab2', label: 'تب دوم', content: 'محتوای تب دوم' },
                              { id: 'tab3', label: 'تب سوم', content: 'محتوای تب سوم' }
                            ]}
                          />
                        </CardContent>
                      </Card>
                    )}
                  </div>

                  {/* Accordion */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold">Accordion</h3>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleCode('accordion')}
                      >
                        {showCodeSections.accordion ? 'پیش‌نمایش' : 'نمایش کد'}
                      </Button>
                    </div>
                    
                    {showCodeSections.accordion ? (
                      <CodeBlock code={accordionCode} language="jsx" />
                    ) : (
                      <Card>
                        <CardContent className="pt-6">
                          <Accordion items={accordionItems} />
                        </CardContent>
                      </Card>
                    )}
                  </div>

                  {/* Breadcrumb */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold">Breadcrumb</h3>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleCode('breadcrumb')}
                      >
                        {showCodeSections.breadcrumb ? 'پیش‌نمایش' : 'نمایش کد'}
                      </Button>
                    </div>
                    
                    {showCodeSections.breadcrumb ? (
                      <CodeBlock code={breadcrumbCode} language="jsx" />
                    ) : (
                      <Card>
                        <CardContent className="pt-6">
                          <Breadcrumb items={breadcrumbItems} />
                        </CardContent>
                      </Card>
                    )}
                  </div>

                  {/* Pagination */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold">صفحه‌بندی</h3>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleCode('pagination')}
                      >
                        {showCodeSections.pagination ? 'پیش‌نمایش' : 'نمایش کد'}
                      </Button>
                    </div>
                    
                    {showCodeSections.pagination ? (
                      <CodeBlock code={paginationCode} language="jsx" />
                    ) : (
                      <Card>
                        <CardContent className="pt-6">
                          <Pagination
                            currentPage={currentPage}
                            totalPages={10}
                            onPageChange={setCurrentPage}
                          />
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </Section>
              )
            },
            // ... سایر تب‌ها به همین شکل
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