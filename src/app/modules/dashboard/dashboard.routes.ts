import express from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { DashboardController } from './dashboard.controller';
import { uploadFile } from '../../middlewares/fileUploader';

const router = express.Router();

// =============================
router.get('/get_total_count',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  DashboardController.totalCount,
);
router.get('/get_subscription_growth',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  DashboardController.getMonthlySubscriptionGrowth,
);
router.get('/get_user_growth',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  DashboardController.getMonthlyUserGrowth,
);

// =============================
router.get('/get_all_user',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  DashboardController.getAllUser,
);
router.post('/create_subscriptions',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  DashboardController.createSubscriptions,
);
router.patch('/update_subscriptions/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  DashboardController.updateSubscription,
);
router.delete('/delete_subscriptions/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  DashboardController.deleteSubscription,
);
router.get('/get_all_subscriptions',
  DashboardController.getAllSubscription,
);
router.get('/get_all_subscribers',
  DashboardController.getAllSubscriber,
);

// =========================================
router.post('/create-category',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  uploadFile(),
  DashboardController.categoryInsertIntoDB,
);
router.get(
  '/all-category',
  DashboardController.allCategory,
);
router.patch(
  '/edit-category/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  uploadFile(),
  DashboardController.updateCategory,
);
router.delete(
  '/delete-category/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  DashboardController.deleteCategory,
);

// ========================
// router.post('/add-faqs',
//   DashboardController.addFaq,
// );
// router.patch('/update-faqs/:id',
//   DashboardController.updateFaq,
// );
// router.delete('/delete-faqs/:id',
//   DashboardController.deleteFaq,
// );
// router.get('/get-faqs',
//   DashboardController.getFaq,
// );
router.post('/addupdate-termsConditions',
  DashboardController.addTermsConditions,
);
router.get('/get-rules',
  DashboardController.getTermsConditions,
);
router.post('/addupdate-privacy-policy',
  DashboardController.addPrivacyPolicy,
);
router.get('/get-privacy-policy',
  DashboardController.getPrivacyPolicy,
);
router.post('/about_us',
  DashboardController.addAboutUs,
);
router.get('/about_us',
  DashboardController.getAboutUs,
);
// ================================  


export const DashboardRoutes = router;
